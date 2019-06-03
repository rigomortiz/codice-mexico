import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http'; 
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LenguasDataService {
    file: String = "";

   constructor(private httpClient: HttpClient) {
   }

    public getJSON(): Observable<HttpResponse<any>> {
        return this.httpClient.get<any>("./assets/data/lenguas.json",  {
            observe: 'response'
        });
    }

    public getExcel(): Observable<HttpResponse<any>> {
       return this.httpClient.get("https://uc7c904a5d0cbc4ffea1ae400f12.dl.dropboxusercontent.com/cd/0/get/AiIe7BW5zCTgAfTndstw47dfJzJdz6PhU0Y7jJv5TY1zzfEIzUUgLmxosZnnZl4MjymYa6I466FGWeoFj-n0Lk3w3ZJAwrXtq4HC0FfEwjGwpQ/file?dl=1#", {
           responseType: 'arraybuffer',
           observe:'response'
       });
        //utils.sheet_to_json()
    }
}
