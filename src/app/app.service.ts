import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppService{
    apiUrl:string = "http://localhost:8080/api/";

    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    constructor(
      private httpClient: HttpClient
    ) { }

    public enviar(nome: string, email: string): Observable<any> {
      return this.httpClient.get(this.apiUrl);
    }
}
