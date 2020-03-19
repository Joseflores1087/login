import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { UserInterface } from '../models/user-interface';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // url='http://192.168.21.154:50000/usuarios';
  url='http://www.nbmayorista.com/api';
  
  constructor(public http: HttpClient) { 
    //  console.log('Hola Mundo');
  }
  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });
  // obtenerDatos(){
  //   return this.http.get(this.url);
  //   console.log()
  // }
  obtenerDatos(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
    console.log(this.url);
  }

  login(usuario: string, clave: string): Observable<any> {
    const url_api = "http://www.nbmayorista.com/api";
    return this.http
      .post <UserInterface> (
        url_api,
        { usuario, clave },
        { headers: this.headers }
      )
      .pipe(map(data => data));
  }
}