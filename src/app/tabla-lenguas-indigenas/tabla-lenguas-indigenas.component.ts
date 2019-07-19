import {Component, OnInit, AfterViewInit} from '@angular/core';
import {LenguasDataService} from './lenguas-data.service';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {BreakpointObserver, BreakpointState} from '@angular/cdk/layout'
import {SocialService} from "ng6-social-button";
import * as XLSX from 'xlsx';

/**
 * ID
 * Lengua
 * CVE-LEN
 * FAMILIA
 * CVE-FAM
 * Población Indígena
 * 5 grupos de población
 * Porcentaje de población indígena que residía en otra entidad o país en marzo 2010, 2015
 * Porcentaje de población indígena que nació en otra entidad
 * Promedio de migración temporal y absoluta
 * Migración
 * Total de población
 * Rural (<2500)
 * Cinco grupos de población rural
 * Total de población
 * IRE (Índice de Remplazo Etnolingüístico)
 * Grado
 * Posición
 * Posición en la tabla periódica
 * clase html

 */
const ID: number = 0;
const LENGUA: number = 1;
const CVE_LEN: number = 2;
const FAMILIA: number = 3;
const CVE_FAM: number = 4;
const POBLACION: number = 5;
const GRUPOS_POBLACION: number = 6;
const RESIDENTES: number = 7;
const NACIDOS: number = 8;
const PROMEDIO_MIGRACION: number = 9;
const MIGRACION: number = 10;
const POBLACION_TOTAL: number = 11;
const RURAL: number = 12;
const GRUPOS_RURAL: number = 13;
const TOTAL_POBLACION: number = 14;
const IRE: number = 15;
const GRADO: number = 16;
const POSICION: number = 17;
const POSICION_TABLA_PERIODICA: number = 18;
const CLASE_HTML: number = 19;

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
    styleUrls: ['./tabla-lenguas-indigenas.component.css', 'media-queries.css'],

})
export class TablaLenguasIndigenasComponent implements OnInit, AfterViewInit {
    private languages = [];
    private safeHtml: SafeHtml;
    private nombre = "";
    private simbolo = "";
    private descripcion = "";
    private familia = "";
    private selectedFilter: string;
    public showContainer: boolean;

    private shareObj = {
        href: "FACEBOOK-SHARE-LINK",
        hashtag: "#FACEBOOK-SHARE-HASGTAG"
    };

    private filterTypes = [
        {value: 'familias', display: 'Familias'},
        {value: 'language', display: 'Lenguas'},
        {value: 'poblacion', display: 'Población'},
    ];
    ID: number = 0;
    LENGUA: number = 1;
    CVE_LEN: number = 2;
    FAMILIA: number = 3;
    CVE_FAM: number = 4;
    POBLACION: number = 5;
    GRUPOS_POBLACION: number = 6;
    RESIDENTES: number = 7;
    NACIDOS: number = 8;
    PROMEDIO_MIGRACION: number = 9;
    MIGRACION: number = 10;
    POBLACION_TOTAL: number = 11;
    RURAL: number = 12;
    GRUPOS_RURAL: number = 13;
    TOTAL_POBLACION: number = 14;
    IRE: number = 15;
    GRADO: number = 16;
    POSICION: number = 17;
    POSICION_TABLA_PERIODICA: number = 18;
    CLASS_HTML: number = 19;

    constructor(private lenguasDataService: LenguasDataService, private sanitizer: DomSanitizer,
                public breakpointObserver: BreakpointObserver, private socialAuthService: SocialService) {

        this.lenguasDataService.getExcel().subscribe(resp => {
            let data = new Uint8Array(resp.body);
            let workbook = XLSX.read(data, {type: "array"});
            const ws: XLSX.WorkSheet = workbook.Sheets['Hoja1'];
            this.languages = XLSX.utils.sheet_to_json(ws, {header: 1});
            this.languages.shift();
            this.languages.sort((a, b) => {
                if (a[POSICION] < b[POSICION]) return -1;
                if (a[POSICION] > b[POSICION]) return 1;
                return 0;
            });
        });

        this.selectedFilter = 'familia';
    }

    ngOnInit() {

    }

    ngAfterViewInit(): void {

    }

    public onSelectFamilia(f: string) {
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

    public onViewLanguage(lengua) {
        let c = document.getElementsByClassName("modal");
        c[0].classList.toggle("is-active");
        document.getElementsByTagName("html")[0].style.overflowY = "hidden";
        this.nombre = lengua[1];
        this.familia = lengua[19];
        this.simbolo = lengua[2];
        //this.descripcion = this.sanitizer.bypassSecurityTrustHtml(language.descripcion).toString();
    }

    public onCloseLengua() {
        let c = document.getElementsByClassName("modal");
        c[0].classList.toggle("is-active");
        document.getElementsByTagName("html")[0].style.overflowY = "auto";
    }

    public facebookSharing(shareObj: any) {
        this.socialAuthService.facebookSharing(shareObj);
    }

    public orderByPosicion() {
        TablaLenguasIndigenasComponent.typePeriodicTable();
        this.orderLanguagesBy(POSICION, ASC);
    }

    public orderByLengua() {
        TablaLenguasIndigenasComponent.typeGrid();
        this.orderLanguagesBy(LENGUA, ASC);
    }

    public orderByPoblacion() {
        TablaLenguasIndigenasComponent.typeGrid();
        this.orderLanguagesBy(POBLACION, ASC);
    }

    private filterChanged(selectedValue: string) {
        if (selectedValue === 'familias') {
            this.orderByPosicion();
        } else if (selectedValue === 'language') {
            this.orderByLengua();
        } else if (selectedValue === 'poblacion') {
            this.orderByPoblacion();
        }
    }

    private orderLanguagesBy(pos: number, order: number) {
        if (pos === DESC) {
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

    private static typePeriodicTable() {
        Array.from(document.getElementsByClassName("group")).forEach(function (item) {
            item.classList.add("periodic-table");
        });
        Array.from(document.getElementsByClassName("grids")).forEach(function (item) {
            item.classList.add("periodic-table-grids");
            item.classList.remove("grids");
        });
    }

    private static typeGrid() {
        Array.from(document.getElementsByClassName("group")).forEach(function (item) {
            item.classList.remove("periodic-table");
        });
        Array.from(document.getElementsByClassName("periodic-table-grids")).forEach(function (item) {
            item.classList.remove("periodic-table-grids");
            item.classList.add("grids");
        });
    }
}
