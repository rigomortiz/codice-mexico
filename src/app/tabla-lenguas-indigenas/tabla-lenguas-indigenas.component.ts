import {Component, OnInit, AfterViewInit} from '@angular/core';
import {LenguasDataService} from './lenguas-data.service';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

import * as XLSX from 'xlsx';
import {forEach} from "@angular/router/src/utils/collection";

enum COLUMNS {
ID
,LENGUA
,CVE_LEN
,FAMILIA
,CVE_FAM
,POBLACION_INDIGENA
,GRUPOS_DE_POBLACION
,CATEGORIA
,PORCENTAJE_DE_POBLACION_INDIGENA_QUE_RESIDIA_EN_OTRA_ENTIDAD_O_PAIS_EN_MARZO_2010_2015
,PORCENTAJE_DE_POBLACION_INDIGENA_QUE_NACIO_EN_OTRA_ENTIDAD
,PROMEDIO_DE_MIGRACION_TEMPORAL_Y_ABSOLUTA
,MIGRACION
,CATEGORIA_MIGRACION
,RURAL
,CINCO_GRUPOS_DE_POBLACION_RURAL
,CATEGORIA_POBLACION_RURAL
,IRE
,GRADO
,GRUPO_IRE
,VARIANTES
,NUMERO_DE_VARIANTES
,GRUPO_DE_VARIANTES
,POSICION
,POSICION_EN_LA_TABLA_PERIODICA
,CLASE_HTML
,COLOR
}

const ASC: number = 1;
const DESC: number = -1;

export class Lengua {
    id: string;
    numero: string;
    simbolo: string;
    nombre: string;
    posicion: string;
    familia: string;
    descripcion: string;
}

@Component({
    selector: 'app-tabla-lenguas-indigenas',
    templateUrl: './tabla-lenguas-indigenas.component.html',
    styleUrls: ['./tabla-lenguas-indigenas.component.css', 'media-queries.css']
})
export class TablaLenguasIndigenasComponent implements OnInit, AfterViewInit {
    private languages = [];
    private languagesColumnA = [];
    private languagesColumnB = [];
    private languagesColumnC = [];
    private languagesColumnD = [];
    private languagesColumnE = [];
    private safeHtml: SafeHtml;
    private nombre = "";
    private clase = "";
    private simbolo = "";
    private descripcion = "";
    private claveFamilia = "";
    private poblacion = "";
    private categoriaPoblacion = "";
    private migracion = "";
    private categoriaMigracion = "";
    private rural = "";
    private ruralMigracion = "";
    private ire = "";
    private ireMigracion = "";
    private familia = "";
    private variantes = [];
    private numeroVariantes;
    private menu_ire = "Índice de Remplazo Etnolingüístico (IRE)";
    private selectedFilter: string;
    public showContainer: boolean;
    public columns: COLUMNS;
    private COLOR = ["bg-green", "bg-green-light", "bg-yellow", "bg-orange", "bg-red", "bg-none"];
    private COLOR3 = ["shadow-green", "shadow-green-light", "shadow-yellow", "shadow-orange", "shadow-red", "bg-none"];
    private COLOR2 = ["green", "green-light", "yellow", "orange", "red", "none"];
    private typeClassTable = "periodic-table-family";

    matcher: MediaQueryList;

    public numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    private shareObj = {
        href: "FACEBOOK-SHARE-LINK",
        hashtag: "#FACEBOOK-SHARE-HASGTAG"
    };

    private filterTypes = [
        {value: 'familias', display: 'Familias'},
        {value: 'language', display: 'Lenguas'},
        {value: 'poblacion', display: 'Población'},
    ];

    constructor(private lenguasDataService: LenguasDataService, private sanitizer: DomSanitizer,
                public breakpointObserver: BreakpointObserver ) {

        this.lenguasDataService.getExcel().subscribe(resp => {
            let data = new Uint8Array(resp.body);
            let workbook = XLSX.read(data, {type: "array"});
            const ws: XLSX.WorkSheet = workbook.Sheets['Hoja1'];
            this.languages = XLSX.utils.sheet_to_json(ws, {header: 1});
            this.languages.shift();
            console.log(this.languages);
            this.languages.sort((a, b) => {
                if (a[COLUMNS.POSICION] < b[COLUMNS.POSICION]) return -1;
                if (a[COLUMNS.POSICION] > b[COLUMNS.POSICION]) return 1;
                return 0;
            });
        });

        this.selectedFilter = 'familia';
    }

    ngOnInit() {
        this.breakpointObserver
            .observe(['(min-width: 768px) and (max-width: 1023px)'])
            .subscribe((state: BreakpointState) => {
                if (state.matches) {
                    this.menu_ire = "IRE";
                } else {
                    this.menu_ire = "Índice de Remplazo Etnolingüístico (IRE)";
                }
            });
    }

    ngAfterViewInit(): void {
    }

    public resetMenu(){

        let e;

        e = document.getElementsByClassName("menu-checkbox");
        for (let i = 0; i < e.length; i++) {
            e[i].checked = true;
        }
    }
    public resetSymbols(){
        let e;

        for(let i = 1; i <= 5; i++){
            e = document.getElementsByClassName("a" + i);
            for (let i = 0; i < e.length; i++) {
                e[i].checked = false;
            }
            e = document.getElementsByClassName("b" + i);
            for (let i = 0; i < e.length; i++) {
                e[i].checked = false;
            }
            e = document.getElementsByClassName("c" + i);
            for (let i = 0; i < e.length; i++) {
                e[i].checked = false;
            }
            e = document.getElementsByClassName("d" + i);
            for (let i = 0; i < e.length; i++) {
                e[i].checked = false;
            }
            e = document.getElementsByClassName("e" + i);
            for (let i = 0; i < e.length; i++) {
                e[i].checked = false;
            }
        }

        e = document.getElementsByClassName("group");
        for (let i = 0; i < e.length; i++) {
            e[i].classList.remove("shadow-green");
            e[i].classList.remove("shadow-green-light");
            e[i].classList.remove("shadow-yellow");
            e[i].classList.remove("shadow-orange");
            e[i].classList.remove("shadow-red");
        }
    }

    public onSelectA(f: string){
      //  this.resetSymbols();

        let e = document.getElementsByClassName(f.toLowerCase());
        for (let i = 0; i < e.length; i++) {
            e[i].classList.toggle("hide");
        }

        let className;
        if(f === "A1" || f === "B1" || f === "C1" || f === "D1" || f === "E1")
            className = "shadow-red";
        else if(f === "A2" || f === "B2" || f === "C2" || f === "D2" || f === "E2")
            className = "shadow-orange";
        else if(f === "A3" || f === "B3" || f === "C3" || f === "D3" || f === "E3")
            className = "shadow-yellow";
        else if(f === "A4" || f === "B4" || f === "C4" || f === "D4" || f === "E4")
            className = "shadow-green-light";
        else if(f === "A5" || f === "B5" || f === "C5" || f === "D5" || f === "E5")
            className = "shadow-green";

        let c = document.getElementsByClassName(f);
        for (let i = 0; i < c.length; i++) {
            c[i].classList.toggle(className);
        }
    }

    public onSelectFamily(f: string) {
        let c = document.getElementsByClassName(f);

        for (let i = 0; i < c.length; i++) {
            c[i].classList.toggle("hide");
            if (this.showContainer && c[i].tagName == "LI")
                c[i].classList.toggle("hide-mobile");
        }
        // if (f === "oto-mangue") {
        //     let c = document.getElementsByClassName("zapoteco");
        //
        //     for (let i = 0; i < c.length; i++) {
        //         c[i].classList.toggle("hide");
        //         if (this.showContainer && c[i].tagName == "LI")
        //             c[i].classList.toggle("hide-mobile");
        //     }
        // }
        //
        // if (f === "yuto-nahua") {
        //     let c = document.getElementsByClassName("nahuas");
        //
        //     for (let i = 0; i < c.length; i++) {
        //         c[i].classList.toggle("hide");
        //         if (this.showContainer && c[i].tagName == "LI")
        //             c[i].classList.toggle("hide-mobile");
        //     }
        // }

    }

    public openTabPeriodicTablet(evt, tabName){
        let i, tabLinks;
        tabLinks = document.getElementsByClassName("tab");
        for (i = 0; i < tabLinks.length; i++) {
            tabLinks[i].className = tabLinks[i].className.replace(" is-active", "");
        }
        //document.getElementById(tabName).style.display = "block";
        evt.currentTarget.className += " is-active";
        if(tabName === "periodic-table-family")
            this.onViewFamily();
        else if(tabName === "periodic-table-population")
            this.onViewPopulation();
        else if(tabName === "periodic-table-migration")
            this.onViewMigration();
        else if(tabName === "periodic-table-rural-population")
            this.onViewPopulationRural();
        else if(tabName === "periodic-table-ire")
            this.onViewIRE();
        else if(tabName === "periodic-table-variantes")
            this.onViewVariantes();
        else if(tabName === "periodic-table-alphabet")
            this.onViewAlphabet();
    }

    public openTabPeriodicTabletSymbols(evt, tabName){
        let i, x, tabLinks;
        x = document.getElementsByClassName("content-tab-symbols");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        tabLinks = document.getElementsByClassName("tab-symbols");
        for (i = 0; i < x.length; i++) {
            tabLinks[i].className = tabLinks[i].className.replace(" is-active", "");
        }
        document.getElementById(tabName).style.display = "flex";
        evt.currentTarget.className += " is-active";
        this.resetSymbols();

        //if(tabName === "periodic-table-family-symbol-population")
    }

    public onViewFamily(){
        this.typeClassTable = "periodic-table-family";
        this.resetMenu();

        document.getElementsByClassName("family-menu").item(0)
            .setAttribute("style", "display: show;");
        document.getElementsByClassName("periodic-table-symbols").item(0)
            .setAttribute("style", "display: show;");
        this.orderLanguagesBy(this.languages, COLUMNS.POSICION, ASC);
    }

    public onViewPopulation(){
        this.typeClassTable = "periodic-table-population";
        document.getElementsByClassName("family-menu").item(0)
            .setAttribute("style", "display: none;");
        document.getElementsByClassName("periodic-table-symbols").item(0)
            .setAttribute("style", "display: none;");

        this.languagesColumnA = this.languages.filter( l => l[COLUMNS.GRUPOS_DE_POBLACION] === 5);
        this.languagesColumnB = this.languages.filter( l => l[COLUMNS.GRUPOS_DE_POBLACION] === 4);
        this.languagesColumnC = this.languages.filter( l => l[COLUMNS.GRUPOS_DE_POBLACION] === 3);
        this.languagesColumnD = this.languages.filter( l => l[COLUMNS.GRUPOS_DE_POBLACION] === 2);
        this.languagesColumnE = this.languages.filter( l => l[COLUMNS.GRUPOS_DE_POBLACION] === 1);

        this.orderLanguagesBy(this.languagesColumnA, COLUMNS.POBLACION_INDIGENA, DESC);
        this.orderLanguagesBy(this.languagesColumnB, COLUMNS.POBLACION_INDIGENA, DESC);
        this.orderLanguagesBy(this.languagesColumnC, COLUMNS.POBLACION_INDIGENA, DESC);
        this.orderLanguagesBy(this.languagesColumnD, COLUMNS.POBLACION_INDIGENA, DESC);
        this.orderLanguagesBy(this.languagesColumnE, COLUMNS.POBLACION_INDIGENA, DESC);
    }

    public onViewMigration(){
        this.typeClassTable = "periodic-table-migration";
        document.getElementsByClassName("family-menu").item(0)
            .setAttribute("style", "display: none;");
        document.getElementsByClassName("periodic-table-symbols").item(0)
            .setAttribute("style", "display: none;");
        this.languagesColumnA = this.languages.filter( l => l[COLUMNS.MIGRACION] === 5);
        this.languagesColumnB = this.languages.filter( l => l[COLUMNS.MIGRACION] === 4);
        this.languagesColumnC = this.languages.filter( l => l[COLUMNS.MIGRACION] === 3);
        this.languagesColumnD = this.languages.filter( l => l[COLUMNS.MIGRACION] === 2);
        this.languagesColumnE = this.languages.filter( l => l[COLUMNS.MIGRACION] === 1);

        this.orderLanguagesBy(this.languagesColumnA, COLUMNS.PROMEDIO_DE_MIGRACION_TEMPORAL_Y_ABSOLUTA, DESC);
        this.orderLanguagesBy(this.languagesColumnB, COLUMNS.PROMEDIO_DE_MIGRACION_TEMPORAL_Y_ABSOLUTA, DESC);
        this.orderLanguagesBy(this.languagesColumnC, COLUMNS.PROMEDIO_DE_MIGRACION_TEMPORAL_Y_ABSOLUTA, DESC);
        this.orderLanguagesBy(this.languagesColumnD, COLUMNS.PROMEDIO_DE_MIGRACION_TEMPORAL_Y_ABSOLUTA, DESC);
        this.orderLanguagesBy(this.languagesColumnE, COLUMNS.PROMEDIO_DE_MIGRACION_TEMPORAL_Y_ABSOLUTA, DESC);

    }

    public onViewPopulationRural(){
        this.typeClassTable = "periodic-table-rural";
        document.getElementsByClassName("family-menu").item(0)
            .setAttribute("style", "display: none;");
        document.getElementsByClassName("periodic-table-symbols").item(0)
            .setAttribute("style", "display: none;");
        this.languagesColumnA = this.languages.filter( l => l[COLUMNS.CINCO_GRUPOS_DE_POBLACION_RURAL] === 5);
        this.languagesColumnB = this.languages.filter( l => l[COLUMNS.CINCO_GRUPOS_DE_POBLACION_RURAL] === 4);
        this.languagesColumnC = this.languages.filter( l => l[COLUMNS.CINCO_GRUPOS_DE_POBLACION_RURAL] === 3);
        this.languagesColumnD = this.languages.filter( l => l[COLUMNS.CINCO_GRUPOS_DE_POBLACION_RURAL] === 2);
        this.languagesColumnE = this.languages.filter( l => l[COLUMNS.CINCO_GRUPOS_DE_POBLACION_RURAL] === 1);

        this.orderLanguagesBy(this.languagesColumnA, COLUMNS.RURAL, DESC);
        this.orderLanguagesBy(this.languagesColumnB, COLUMNS.RURAL, DESC);
        this.orderLanguagesBy(this.languagesColumnC, COLUMNS.RURAL, DESC);
        this.orderLanguagesBy(this.languagesColumnD, COLUMNS.RURAL, DESC);
        this.orderLanguagesBy(this.languagesColumnE, COLUMNS.RURAL, DESC);
    }

    public onViewIRE(){
        this.typeClassTable = "periodic-table-ire";
        document.getElementsByClassName("family-menu").item(0)
            .setAttribute("style", "display: none;");
        document.getElementsByClassName("periodic-table-symbols").item(0)
            .setAttribute("style", "display: none;");
        this.languagesColumnA = this.languages.filter( l => l[COLUMNS.GRUPO_IRE] === 5 || l[COLUMNS.GRUPO_IRE] === 4);
        this.languagesColumnB = this.languages.filter( l => l[COLUMNS.GRUPO_IRE] === 3);

        let yourArray = this.languages.filter( l => l[COLUMNS.GRUPO_IRE] === 2);
        this.orderLanguagesBy(yourArray, COLUMNS.IRE, DESC);

        let halfWayThough = Math.floor(yourArray.length / 2);

        let arrayFirstHalf = yourArray.slice(0, halfWayThough);
        let arraySecondHalf = yourArray.slice(halfWayThough, yourArray.length);

        this.languagesColumnC = arrayFirstHalf;
        this.languagesColumnD = arraySecondHalf;
        this.languagesColumnE = this.languages.filter( l => l[COLUMNS.GRUPO_IRE] === 1);

        this.orderLanguagesBy(this.languagesColumnA, COLUMNS.IRE, DESC);
        this.orderLanguagesBy(this.languagesColumnB, COLUMNS.IRE, DESC);
        this.orderLanguagesBy(this.languagesColumnC, COLUMNS.IRE, DESC);
        this.orderLanguagesBy(this.languagesColumnD, COLUMNS.IRE, DESC);
        this.orderLanguagesBy(this.languagesColumnE, COLUMNS.IRE, DESC);
    }

    public onViewVariantes(){
        this.typeClassTable = "periodic-table-variantes";
        document.getElementsByClassName("family-menu").item(0)
            .setAttribute("style", "display: none;");
        document.getElementsByClassName("periodic-table-symbols").item(0)
            .setAttribute("style", "display: none;");
        this.languagesColumnA = this.languages.filter( l => l[COLUMNS.GRUPO_DE_VARIANTES] === 5);
        this.languagesColumnB = this.languages.filter( l => l[COLUMNS.GRUPO_DE_VARIANTES] === 4);
        this.languagesColumnC = this.languages.filter( l => l[COLUMNS.GRUPO_DE_VARIANTES] === 3 || l[COLUMNS.GRUPO_DE_VARIANTES] === 2 || l[COLUMNS.GRUPO_DE_VARIANTES] === 1);

        this.orderLanguagesBy(this.languagesColumnA, COLUMNS.ID, ASC);
        this.orderLanguagesBy(this.languagesColumnA, COLUMNS.NUMERO_DE_VARIANTES, DESC);
        this.orderLanguagesBy(this.languagesColumnB, COLUMNS.ID, ASC);
        this.orderLanguagesBy(this.languagesColumnB, COLUMNS.NUMERO_DE_VARIANTES, DESC);
        this.orderLanguagesBy(this.languagesColumnC, COLUMNS.NUMERO_DE_VARIANTES, DESC);
    }

    public onViewAlphabet(){
        this.typeClassTable = "periodic-table-alphabet";
        this.resetMenu();

        document.getElementsByClassName("family-menu").item(0)
            .setAttribute("style", "display: visible;");
        document.getElementsByClassName("periodic-table-symbols").item(0)
            .setAttribute("style", "display: visible;");
        this.orderLanguagesBy(this.languages, COLUMNS.ID, ASC);
    }

    public onViewSymbolsPopulation(){
        document.getElementsByClassName("family-menu").item(0)
            .setAttribute("style", "display: none;");
    }

    public onViewLanguage(lengua) {
        let c = document.getElementById("modal-info");
        c.classList.toggle("is-active");
        document.getElementsByTagName("html")[0].style.overflowY = "hidden";
        this.nombre = lengua[COLUMNS.LENGUA];
        this.clase = lengua[COLUMNS.CLASE_HTML];
        this.familia = lengua[COLUMNS.FAMILIA];
        this.simbolo = lengua[COLUMNS.CVE_LEN];
        let str:String = lengua[COLUMNS.VARIANTES];

        //this.descripcion = "";
        this.claveFamilia = lengua[COLUMNS.CVE_FAM];
        this.poblacion = lengua[COLUMNS.POBLACION_INDIGENA];
        this.categoriaPoblacion = lengua[COLUMNS.CATEGORIA];
        this.migracion = lengua[COLUMNS.MIGRACION];
        this.categoriaMigracion = lengua[COLUMNS.CATEGORIA_MIGRACION];
        this.rural = lengua[COLUMNS.RURAL];
        this.ruralMigracion = lengua[COLUMNS.CATEGORIA_POBLACION_RURAL];
        this.ire = lengua[COLUMNS.IRE];
        this.ireMigracion = lengua[COLUMNS.GRADO];
        this.numeroVariantes = lengua[COLUMNS.NUMERO_DE_VARIANTES];
        if(this.numeroVariantes >0)
            this.variantes = str.split("\n");
        else
            this.variantes = []

        //this.descripcion = this.sanitizer.bypassSecurityTrustHtml(language.descripcion).toString();
    }

    public viewMenu(){
        document.getElementById("modal-menu").classList.toggle("is-active");
        document.getElementById('nav-menu').classList.toggle('menu-vertical');
        document.getElementById('button-menu').classList.toggle('is-active');
    }

    public viewImage(){
        this.onCloseLanguage();
        let c = document.getElementById("modal-image");
        c.classList.toggle("is-active");
        document.getElementsByTagName("html")[0].style.overflowY = "hidden";
    }

    public viewLenguasExtintas(){
        let c = document.getElementById("modal-obituario");
        c.classList.toggle("is-active");
        document.getElementById("modal-menu").classList.toggle("is-active");
        document.getElementById('nav-menu').classList.toggle('menu-vertical');
        document.getElementById('button-menu').classList.toggle('is-active');
    }

    public onCloseLanguage() {
        let c = document.getElementById("modal-info");
        c.classList.toggle("is-active");
        document.getElementsByTagName("html")[0].style.overflowY = "auto";
    }

    public onCloseImage() {
        let c = document.getElementById("modal-image");
        c.classList.toggle("is-active");
        document.getElementsByTagName("html")[0].style.overflowY = "auto";
    }

    public onCloseLanguasExtintas() {
        let c = document.getElementById("modal-obituario");
        c.classList.toggle("is-active");
    }


    // public orderByPosicion() {
    //     TablaLenguasIndigenasComponent.typePeriodicTable();
    //     this.orderLanguagesBy(COLUMNS.POSICION, ASC);
    // }
    //
    // public orderByLengua() {
    //     TablaLenguasIndigenasComponent.typeGrid();
    //     this.orderLanguagesBy(COLUMNS.LENGUA, ASC);
    // }
    //
    // public orderByPoblacion() {
    //     TablaLenguasIndigenasComponent.typeGrid();
    //     this.orderLanguagesBy(COLUMNS.TOTAL_DE_POBLACION, ASC);
    // }

    // private filterChanged(selectedValue: string) {
    //     if (selectedValue === 'familias') {
    //         this.orderByPosicion();
    //     } else if (selectedValue === 'language') {
    //         this.orderByLengua();
    //     } else if (selectedValue === 'poblacion') {
    //         this.orderByPoblacion();
    //     }
    // }

    private orderLanguagesBy(array: any[], pos: number, order: number) {

        if (order === DESC) {
            array.sort((a, b) => {
                if (a[pos] < b[pos]) return 1;
                if (a[pos] > b[pos]) return -1;
                return 0;
            });
        } else {
            array.sort((a, b) => {
                if (a[pos] < b[pos]) return -1;
                if (a[pos] > b[pos]) return 1;
                return 0;
            });
        }
    }

    // private static typePeriodicTable() {
    //     Array.from(document.getElementsByClassName("group")).forEach(function (item) {
    //         item.classList.add("periodic-table");
    //     });
    //     Array.from(document.getElementsByClassName("grids")).forEach(function (item) {
    //         item.classList.add("periodic-table-family-grids");
    //         item.classList.remove("periodic-table-population-grids");
    //     });
    // }
    //
    // private static typeGrid() {
    //     Array.from(document.getElementsByClassName("group")).forEach(function (item) {
    //         item.classList.remove("periodic-table");
    //     });
    //     Array.from(document.getElementsByClassName("periodic-table-family-grids")).forEach(function (item) {
    //         item.classList.remove("periodic-table-family-grids");
    //         item.classList.add("grids");
    //     });
    // }


}
