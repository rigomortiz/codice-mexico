import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LenguasDataService {
    file: String = "";

    constructor(private httpClient: HttpClient) {
    }

    public getJSON(): Observable<HttpResponse<any>> {
        return this.httpClient.get<any>("./assets/data/lenguas.json", {
            observe: 'response'
        });
    }

    public getExcel(): Observable<HttpResponse<any>> {
        return this.httpClient.get("./assets/data/Tabla lenguas indigenas.xlsx", {
            responseType: 'arraybuffer',
            observe: 'response'
        });
    }
}
