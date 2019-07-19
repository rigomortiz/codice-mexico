import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {TablaLenguasIndigenasComponent} from './tabla-lenguas-indigenas/tabla-lenguas-indigenas.component';
import {LenguasDataService} from './tabla-lenguas-indigenas/lenguas-data.service';

import {Ng6SocialButtonModule, SocialServiceConfig} from "ng6-social-button";

// Configs
export function getAuthServiceConfigs() {
    let config = new SocialServiceConfig()
        .addFacebook("357892264834597");
    return config;
}

@NgModule({
    imports: [BrowserModule, FormsModule, HttpClientModule, Ng6SocialButtonModule
    ],
    declarations: [AppComponent, NavbarComponent, TablaLenguasIndigenasComponent],
    bootstrap: [AppComponent],
    providers: [LenguasDataService, {
        provide: SocialServiceConfig,
        useFactory: getAuthServiceConfigs
    },]
})
export class AppModule {
}
