import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http'; 
import { Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LenguasDataService {

   constructor(private httpClient: HttpClient) {
   }

    public getJSON(): Observable<HttpResponse<any>> {
        return this.httpClient.get<any>("./assets/data/lenguas.json",  {
            observe: 'response', 
        });
    }
}
