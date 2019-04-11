import { Component, OnInit } from '@angular/core';
import { LenguasDataService } from './lenguas-data.service';


@Component({
  selector: 'app-tabla-lenguas-indigenas',
  templateUrl: './tabla-lenguas-indigenas.component.html',
  styleUrls: ['./tabla-lenguas-indigenas.component.css']
})
export class TablaLenguasIndigenasComponent implements OnInit {
  lenguas = [];
  algica: boolean;

  constructor(private lenguasDataService: LenguasDataService) {
    this.algica = true;
   }

  ngOnInit() {
    this.lenguasDataService.getJSON().subscribe(resp =>{
        console.log(resp);
        this.lenguas = resp.body;
    })
  }

  onSelectFamilia(f: String){
    let c = document.getElementsByClassName(f);
  
    for(let i =0; i< c.length; i++){
      if(c[i].classList.toggle)
       c[i].classList.toggle("hide");
    }
    if(f === "oto-mangue"){
      let c = document.getElementsByClassName("zapoteco");

      for(let i =0; i< c.length; i++){
        if(c[i].classList.toggle)
        c[i].classList.toggle("hide");
      }
    }

     if(f === "yuto-nahua"){
      let c = document.getElementsByClassName("nahuas");

      for(let i =0; i< c.length; i++){
        if(c[i].classList.toggle)
        c[i].classList.toggle("hide");
      }
    }

  }

}