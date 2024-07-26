import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private URL = 'http://localhost:3100/api/' 

  //Metodo para iniciar sesion de usuarios
  SignIn(user:any) {
    return this.http.post<any>(this.URL + 'SignIn', user);
  }

  SignUp(user:any) {
    return this.http.post(this.URL + 'SignUp', user);
  }

  GetUsers() {
    return this.http.get<any>(this.URL + 'getUser');
  }
  //--------------------------------------------------------------------


  //consumo de inventario

  GetDevice(){
    return this.http.get(this.URL + '');
  }

}
