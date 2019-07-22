import {Component, OnInit, AfterViewInit} from '@angular/core';
import {LenguasDataService} from './lenguas-data.service';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {BreakpointObserver, BreakpointState} from '@angular/cdk/layout'
import {SocialService} from "ng6-social-button";
import * as XLSX from 'xlsx';

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
    private languagesColumnA = [];
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
                public breakpointObserver: BreakpointObserver, private socialAuthService: SocialService) {

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

    public openTab(evt, tabName){
        let i, x, tabLinks;
        x = document.getElementsByClassName("content-tab");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        tabLinks = document.getElementsByClassName("tab");
        for (i = 0; i < x.length; i++) {
            tabLinks[i].className = tabLinks[i].className.replace(" is-active", "");
        }
        document.getElementById(tabName).style.display = "block";
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

    public onViewFamily(){
        this.orderLanguagesBy(COLUMNS.POSICION, ASC);
    }

    public onViewPopulation(){
        this.orderLanguagesBy(COLUMNS.POBLACION_INDIGENA, DESC);
        this.languagesColumnA = this.languages.filter( l => l[COLUMNS.GRUPOS_DE_POBLACION] === 5);
        this.languagesColumnB = this.languages.filter( l => l[COLUMNS.GRUPOS_DE_POBLACION] === 4);
        this.languagesColumnC = this.languages.filter( l => l[COLUMNS.GRUPOS_DE_POBLACION] === 3);
        this.languagesColumnD = this.languages.filter( l => l[COLUMNS.GRUPOS_DE_POBLACION] === 2);
        this.languagesColumnE = this.languages.filter( l => l[COLUMNS.GRUPOS_DE_POBLACION] === 1);
    }

    public onViewMigration(){
        this.orderLanguagesBy(COLUMNS.PROMEDIO_DE_MIGRACION_TEMPORAL_Y_ABSOLUTA, DESC);
        this.languagesColumnA = this.languages.filter( l => l[COLUMNS.MIGRACION] === 5);
        this.languagesColumnB = this.languages.filter( l => l[COLUMNS.MIGRACION] === 4);
        this.languagesColumnC = this.languages.filter( l => l[COLUMNS.MIGRACION] === 3);
        this.languagesColumnD = this.languages.filter( l => l[COLUMNS.MIGRACION] === 2);
        this.languagesColumnE = this.languages.filter( l => l[COLUMNS.MIGRACION] === 1);
    }

    public onViewPopulationRural(){
        this.orderLanguagesBy(COLUMNS.RURAL, DESC);
        this.languagesColumnA = this.languages.filter( l => l[COLUMNS.CINCO_GRUPOS_DE_POBLACION_RURAL] === 5);
        this.languagesColumnB = this.languages.filter( l => l[COLUMNS.CINCO_GRUPOS_DE_POBLACION_RURAL] === 4);
        this.languagesColumnC = this.languages.filter( l => l[COLUMNS.CINCO_GRUPOS_DE_POBLACION_RURAL] === 3);
        this.languagesColumnD = this.languages.filter( l => l[COLUMNS.CINCO_GRUPOS_DE_POBLACION_RURAL] === 2);
        this.languagesColumnE = this.languages.filter( l => l[COLUMNS.CINCO_GRUPOS_DE_POBLACION_RURAL] === 1);
    }

    public onViewIRE(){
        this.orderLanguagesBy(COLUMNS.IRE, DESC);
        this.languagesColumnA = this.languages.filter( l => l[COLUMNS.GRUPO_IRE] === 5);
        this.languagesColumnB = this.languages.filter( l => l[COLUMNS.GRUPO_IRE] === 4);
        this.languagesColumnC = this.languages.filter( l => l[COLUMNS.GRUPO_IRE] === 3);
        this.languagesColumnD = this.languages.filter( l => l[COLUMNS.GRUPO_IRE] === 2);
        this.languagesColumnE = this.languages.filter( l => l[COLUMNS.GRUPO_IRE] === 1);
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
