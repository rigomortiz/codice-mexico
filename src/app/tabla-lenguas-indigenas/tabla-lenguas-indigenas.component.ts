import { Component, OnInit, AfterViewInit } from '@angular/core';
import { LenguasDataService } from './lenguas-data.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout'
import * as XLSX from 'xlsx';
const POSICION : number = 17;
const LENGUA : number = 1;

import {
    SocialService
} from "ng6-social-button";

export class Lengua{
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
    lenguas = [];
    safeHtml: SafeHtml;
    nombre = "";
    simbolo = "";
    descripcion = "";
    familia = "";
    selectedFilter: string;
    public showContainer: boolean;

    shareObj = {
        href: "FACEBOOK-SHARE-LINK",
        hashtag:"#FACEBOOK-SHARE-HASGTAG"
    };

    public filterTypes = [
        {value:'familias', display:'Familias'},
        {value:'lengua', display:'Lenguas'},
    ];

    constructor(private lenguasDataService: LenguasDataService, private sanitizer: DomSanitizer,
                public breakpointObserver: BreakpointObserver, private socialAuthService: SocialService) {
        this.selectedFilter = 'familia';

    }

    ngOnInit() {
        /*
        this.lenguasDataService.getJSON().subscribe(resp =>{
            console.log(resp.body);
            this.lenguas = resp.body;
        });
       */
        this.lenguasDataService.getExcel().subscribe(resp => {
            let data = new Uint8Array(resp.body);
            let workbook = XLSX.read(data, {type: "array"});
            const ws: XLSX.WorkSheet = workbook.Sheets['Hoja1'];
            this.lenguas = XLSX.utils.sheet_to_json(ws, {header: 1});
            this.lenguas.shift();
            this.orderByPosicion();
        })
        /*
           this.breakpointObserver
            .observe(['(max-width: 350px)'])
            .subscribe((state: BreakpointState) => {
              if (state.matches) {
                this.showContainer = true;
              } else {
                this.showContainer = false;
              }
            });
        */
    }

    onSelectFamilia(f: string){
        let c = document.getElementsByClassName(f);

        for(let i =0; i< c.length; i++){
            c[i].classList.toggle("hide");
            if(this.showContainer && c[i].tagName == "LI")
                c[i].classList.toggle("hide-mobile");
        }
        if(f === "oto-mangue"){
            let c = document.getElementsByClassName("zapoteco");

            for(let i =0; i< c.length; i++){
                c[i].classList.toggle("hide");
                if(this.showContainer && c[i].tagName == "LI")
                    c[i].classList.toggle("hide-mobile");
            }
        }

        if(f === "yuto-nahua"){
            let c = document.getElementsByClassName("nahuas");

            for(let i =0; i< c.length; i++){
                c[i].classList.toggle("hide");
                if(this.showContainer && c[i].tagName == "LI")
                    c[i].classList.toggle("hide-mobile");
            }
        }

    }

    onViewLengua(lengua){
        let c = document.getElementsByClassName("modal");
        c[0].classList.toggle("is-active");
        document.getElementsByTagName("html")[0].style.overflowY="hidden";
        this.nombre = lengua[1];
        this.familia = lengua[19];
        this.simbolo = lengua[2];
        //this.descripcion = this.sanitizer.bypassSecurityTrustHtml(lengua.descripcion).toString();
    }

    onCloseLengua(){
        let c = document.getElementsByClassName("modal");
        c[0].classList.toggle("is-active");
        document.getElementsByTagName("html")[0].style.overflowY="auto";

    }

    public facebookSharing(shareObj: any){
        this.socialAuthService.facebookSharing(shareObj);
    }

    ngAfterViewInit(): void {
    }

    public orderByPosicion() {
        this.lenguas.sort((a, b) => {
            if (a[POSICION] < b[POSICION]) return -1;
            if (a[POSICION] > b[POSICION]) return 1;
            return 0;
        });
        this.lenguas.forEach(value => {
            value[20] = "";
        })
    }

    public orderByLengua(){
        this.lenguas.sort((a, b) => {
            if (a[LENGUA] < b[LENGUA]) return -1;
            if (a[LENGUA] > b[LENGUA]) return 1;
            return 0;
        });
    }

    filterChanged(selectedValue:string){
        if(selectedValue === 'familias'){
            this.orderByPosicion();
            console.log('value is ', selectedValue);
        }else if(selectedValue === 'lengua'){
            this.orderByLengua();
            console.log('value is ', selectedValue);
        }
    }
}
