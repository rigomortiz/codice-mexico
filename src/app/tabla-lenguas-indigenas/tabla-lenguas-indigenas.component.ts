import { Component, OnInit, AfterViewInit } from '@angular/core';
import { LenguasDataService } from './lenguas-data.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout'
export class Lengua{
  id: string;
  numero: string;
  simbolo: string;
  nombre: string;
  posicion: string;
  familia: string;
}
@Component({
  selector: 'app-tabla-lenguas-indigenas',
  templateUrl: './tabla-lenguas-indigenas.component.html',
  styleUrls: ['./tabla-lenguas-indigenas.component.css', 'media-queries.css']
})
export class TablaLenguasIndigenasComponent implements OnInit, AfterViewInit {
  lenguas = [];
  safeHtml: SafeHtml;
  nombre = "";
  descripcion = "";
  familia = "";
  public showContainer: boolean;

  constructor(private lenguasDataService: LenguasDataService, private sanitizer: DomSanitizer, public breakpointObserver: BreakpointObserver) {
  }

  ngOnInit() {
    this.lenguasDataService.getJSON().subscribe(resp =>{
        console.log(resp);
        this.lenguas = resp.body;
    });
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

  onSelectFamilia(f: String){
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

  onViewLengua(lengua: Lengua){
    let c = document.getElementsByClassName("modal");
    c[0].classList.toggle("is-active");
    this.nombre = lengua.nombre;
    this.familia = lengua.familia;
    this.descripcion = this.sanitizer.bypassSecurityTrustHtml( lengua.descripcion);
  }

  onCloseLengua(){
    let c = document.getElementsByClassName("modal");
    c[0].classList.toggle("is-active");
  }

}