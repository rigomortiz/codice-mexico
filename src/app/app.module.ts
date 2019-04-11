import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TablaLenguasIndigenasComponent } from './tabla-lenguas-indigenas/tabla-lenguas-indigenas.component';
import { LenguasDataService } from './tabla-lenguas-indigenas/lenguas-data.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, NavbarComponent, TablaLenguasIndigenasComponent ],
  bootstrap:    [ AppComponent ],
  providers: [LenguasDataService]
})
export class AppModule { }
