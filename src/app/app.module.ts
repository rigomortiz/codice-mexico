import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import {AppComponent} from './app.component';
import {TablaLenguasIndigenasComponent} from './tabla-lenguas-indigenas/tabla-lenguas-indigenas.component';
import {LenguasDataService} from './tabla-lenguas-indigenas/lenguas-data.service';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpClientModule, LayoutModule
    ],
    declarations: [AppComponent, TablaLenguasIndigenasComponent],
    bootstrap: [AppComponent],
    providers: [LenguasDataService]
})
export class AppModule {
}
