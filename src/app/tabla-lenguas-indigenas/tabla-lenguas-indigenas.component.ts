import {Component, OnInit, AfterViewInit} from '@angular/core';
import {LenguasDataService} from './lenguas-data.service';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {BreakpointObserver, BreakpointState} from '@angular/cdk/layout'
import {SocialService} from "ng6-social-button";
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
    private languagesColumnA = [21];
    private languagesColumnB = [];
    private languagesColumnC = [];
    private languagesColumnD = [];
    private languagesColumnE = [];
    private safeHtml: SafeHtml;
    private nombre = "";
    private simbolo = "";
    private descripcion = "";
    private familia = "";
    private selectedFilter: string;
    public showContainer: boolean;
    public columns: COLUMNS;
    private COLOR = ["bg-green", "bg-green-light", "bg-yellow", "bg-orange", "bg-red", "bg-none"];
    private COLOR2 = ["green", "green-light", "yellow", "orange", "red", "none"];
    private typeClassTable = "periodic-table-family";

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
                public breakpointObserver: BreakpointObserver, private socialAuthService: SocialService, ) {

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
    }

    ngAfterViewInit(): void {
    }

    public resetSymbols(){
        let e;

        for(let i = 1; i <= 5; i++){
            e = document.getElementsByClassName("a" + i);
            for (let i = 0; i < e.length; i++) {
                e[i].classList.add("hide");
            }
            e = document.getElementsByClassName("b" + i);
            for (let i = 0; i < e.length; i++) {
                e[i].classList.add("hide");
            }
            e = document.getElementsByClassName("c" + i);
            for (let i = 0; i < e.length; i++) {
                e[i].classList.add("hide");
            }
            e = document.getElementsByClassName("d" + i);
            for (let i = 0; i < e.length; i++) {
                e[i].classList.add("hide");
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
        if(f === "A1" || f === "B1" || f === "C1" || f === "D1")
            className = "shadow-green";
        else if(f === "A2" || f === "B2" || f === "C2" || f === "D2")
            className = "shadow-green-light";
        else if(f === "A3" || f === "B3" || f === "C3" || f === "D3")
            className = "shadow-yellow";
        else if(f === "A4" || f === "B4" || f === "C4" || f === "D4")
            className = "shadow-orange";
        else if(f === "A5" || f === "B5" || f === "C5" || f === "D5")
            className = "shadow-red";

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
        if (f === "oto-mangue") {
            let c = document.getElementsByClassName("zapoteco");

            for (let i = 0; i < c.length; i++) {
                c[i].classList.toggle("hide");
                if (this.showContainer && c[i].tagName == "LI")
                    c[i].classList.toggle("hide-mobile");
            }
        }

        if (f === "yuto-nahua") {
            let c = document.getElementsByClassName("nahuas");

            for (let i = 0; i < c.length; i++) {
                c[i].classList.toggle("hide");
                if (this.showContainer && c[i].tagName == "LI")
                    c[i].classList.toggle("hide-mobile");
            }
        }

    }

    public openTabPeriodicTablet(evt, tabName){
        let i, x, tabLinks;
        x = document.getElementsByClassName("content-tab");
       /* for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }*/
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
        document.getElementsByClassName("family-menu").item(0)
            .setAttribute("style", "display: show;");
        document.getElementsByClassName("periodic-table-symbols").item(0)
            .setAttribute("style", "display: show;");
        this.orderLanguagesBy(COLUMNS.POSICION, ASC);
        this.typeClassTable = "periodic-table-family";
    }

    public onViewPopulation(){
        this.typeClassTable = "periodic-table-population";
        document.getElementsByClassName("family-menu").item(0)
            .setAttribute("style", "display: none;");
        document.getElementsByClassName("periodic-table-symbols").item(0)
            .setAttribute("style", "display: none;");
        this.orderLanguagesBy(COLUMNS.POBLACION_INDIGENA, ASC);
        
        this.languagesColumnA = this.languages.filter( l => l[COLUMNS.GRUPOS_DE_POBLACION] === 5);
        this.languagesColumnB = this.languages.filter( l => l[COLUMNS.GRUPOS_DE_POBLACION] === 4);
        this.languagesColumnC = this.languages.filter( l => l[COLUMNS.GRUPOS_DE_POBLACION] === 3);
        this.languagesColumnD = this.languages.filter( l => l[COLUMNS.GRUPOS_DE_POBLACION] === 2);
        this.languagesColumnE = this.languages.filter( l => l[COLUMNS.GRUPOS_DE_POBLACION] === 1);
    }

    public onViewMigration(){
        this.typeClassTable = "periodic-table-migration";
        document.getElementsByClassName("family-menu").item(0)
            .setAttribute("style", "display: none;");
        document.getElementsByClassName("periodic-table-symbols").item(0)
            .setAttribute("style", "display: none;");
        this.orderLanguagesBy(COLUMNS.PROMEDIO_DE_MIGRACION_TEMPORAL_Y_ABSOLUTA, DESC);
        this.languagesColumnA = this.languages.filter( l => l[COLUMNS.MIGRACION] === 5);
        this.languagesColumnB = this.languages.filter( l => l[COLUMNS.MIGRACION] === 4);
        this.languagesColumnC = this.languages.filter( l => l[COLUMNS.MIGRACION] === 3);
        this.languagesColumnD = this.languages.filter( l => l[COLUMNS.MIGRACION] === 2);
        this.languagesColumnE = this.languages.filter( l => l[COLUMNS.MIGRACION] === 1);
    }

    public onViewPopulationRural(){
        this.typeClassTable = "periodic-table-rural";
        document.getElementsByClassName("family-menu").item(0)
            .setAttribute("style", "display: none;");
        document.getElementsByClassName("periodic-table-symbols").item(0)
            .setAttribute("style", "display: none;");
        this.orderLanguagesBy(COLUMNS.RURAL, DESC);
        this.languagesColumnA = this.languages.filter( l => l[COLUMNS.CINCO_GRUPOS_DE_POBLACION_RURAL] === 5);
        this.languagesColumnB = this.languages.filter( l => l[COLUMNS.CINCO_GRUPOS_DE_POBLACION_RURAL] === 4);
        this.languagesColumnC = this.languages.filter( l => l[COLUMNS.CINCO_GRUPOS_DE_POBLACION_RURAL] === 3);
        this.languagesColumnD = this.languages.filter( l => l[COLUMNS.CINCO_GRUPOS_DE_POBLACION_RURAL] === 2);
        this.languagesColumnE = this.languages.filter( l => l[COLUMNS.CINCO_GRUPOS_DE_POBLACION_RURAL] === 1);
    }

    public onViewIRE(){
        this.typeClassTable = "periodic-table-ire";
        document.getElementsByClassName("family-menu").item(0)
            .setAttribute("style", "display: none;");
        document.getElementsByClassName("periodic-table-symbols").item(0)
            .setAttribute("style", "display: none;");
        this.orderLanguagesBy(COLUMNS.IRE, DESC);
        this.languagesColumnA = this.languages.filter( l => l[COLUMNS.GRUPO_IRE] === 5);
        this.languagesColumnB = this.languages.filter( l => l[COLUMNS.GRUPO_IRE] === 4);
        this.languagesColumnC = this.languages.filter( l => l[COLUMNS.GRUPO_IRE] === 3);
        this.languagesColumnD = this.languages.filter( l => l[COLUMNS.GRUPO_IRE] === 2);
        this.languagesColumnE = this.languages.filter( l => l[COLUMNS.GRUPO_IRE] === 1);
    }

    public onViewSymbolsPopulation(){
        document.getElementsByClassName("family-menu").item(0)
            .setAttribute("style", "display: none;");
    }

    public onViewSymbolsMigration(){

    }
    public onViewSymbolsRuralPopulation(){

    }
    public onViewSymbolsIRE(){

    }

    public onViewLanguage(lengua) {
        let c = document.getElementsByClassName("modal");
        c[0].classList.toggle("is-active");
        document.getElementsByTagName("html")[0].style.overflowY = "hidden";
        this.nombre = lengua[1];
        this.familia = lengua[19];
        this.simbolo = lengua[2];
        //this.descripcion = this.sanitizer.bypassSecurityTrustHtml(language.descripcion).toString();
    }

    public onCloseLanguage() {
        let c = document.getElementsByClassName("modal");
        c[0].classList.toggle("is-active");
        document.getElementsByTagName("html")[0].style.overflowY = "auto";
    }

    public facebookSharing(shareObj: any) {
        this.socialAuthService.facebookSharing(shareObj);
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

    private orderLanguagesBy(pos: number, order: number) {
        if (order === DESC) {
            this.languages.sort((a, b) => {
                if (a[pos] < b[pos]) return 1;
                if (a[pos] > b[pos]) return -1;
                return 0;
            });
        } else {
            this.languages.sort((a, b) => {
                if (a[pos] < b[pos]) return -1;
                if (a[pos] > b[pos]) return 1;
                return 0;
            });
        }
    }

    private orderVertical() {
        let a = new Array(7).fill(0).map(() => new Array(10).fill(0));

        let i = 0, j = 0;

        this.languages.map(e => {
            if(i>6){
                i = 0;
                j++;
            }
            a[i++][j] = e;
            //e.push( this.sanitizer.bypassSecurityTrustStyle("'grid-column':" + j + "; 'grid-row':" + i + ";").toString());
        });
        console.log(a);
        let A = [];
        for(let i = 0; i< 7; i++){
            for(let j = 0; j< 10; j++){
                    A.push(a[i][j])
            }
        }
        A.pop()
        A.pop();
        console.log(A);
        return A;
        /*
        let i = 4, j = 1;

        this.languages.map(e => {
            if(i>7){
                i = 4;
                j++;
            }
            e.push(j);
            e.push(i++);
            //e.push( this.sanitizer.bypassSecurityTrustStyle("'grid-column':" + j + "; 'grid-row':" + i + ";").toString());
        });

        this.languages.forEach(e => {
            console.log(e);
        });
        */

    }

    private orderNormal(){
        this.languages.map(e => {
            e.push('auto');
            e.push('auto');
        });
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
