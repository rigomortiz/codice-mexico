import { Component, OnInit } from '@angular/core';
import { LenguasDataService } from './lenguas-data.service';


@Component({
  selector: 'app-tabla-lenguas-indigenas',
  templateUrl: './tabla-lenguas-indigenas.component.html',
  styleUrls: ['./tabla-lenguas-indigenas.component.css']
})
export class TablaLenguasIndigenasComponent implements OnInit {
  lenguas = [];
  constructor(private lenguasDataService: LenguasDataService) { }

  ngOnInit() {
    this.lenguasDataService.getJSON().subscribe(resp =>{
        console.log(resp);
        this.lenguas = resp.body;
    })
  }

}