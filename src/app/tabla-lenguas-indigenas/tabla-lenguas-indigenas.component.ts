import { Component, OnInit, AfterViewInit } from '@angular/core';
import { LenguasDataService } from './lenguas-data.service';
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
  styleUrls: ['./tabla-lenguas-indigenas.component.css']
})
export class TablaLenguasIndigenasComponent implements OnInit, AfterViewInit {
  lenguas = [];
  nombre = "";
  descripcion = "";

  constructor(private lenguasDataService: LenguasDataService) {
  }

  ngOnInit() {
    this.lenguasDataService.getJSON().subscribe(resp =>{
        console.log(resp);
        this.lenguas = resp.body;
    });
  }

  onSelectFamilia(f: String){
    let c = document.getElementsByClassName(f);
  
    for(let i =0; i< c.length; i++){
       c[i].classList.toggle("hide");
    }
    if(f === "oto-mangue"){
      let c = document.getElementsByClassName("zapoteco");

      for(let i =0; i< c.length; i++){
        c[i].classList.toggle("hide");
      }
    }

     if(f === "yuto-nahua"){
      let c = document.getElementsByClassName("nahuas");

      for(let i =0; i< c.length; i++){
        c[i].classList.toggle("hide");
      }
    }

  }

  onViewLengua(lengua: Lengua){
    let c = document.getElementsByClassName("modal");
    c[0].classList.toggle("is-active");
    this.nombre = lengua.nombre;
    this.descripcion = lengua.descripcion;
    console.log(this.descripcion);
  }

  onCloseLengua(){
    let c = document.getElementsByClassName("modal");
    c[0].classList.toggle("is-active");
  }

}