import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {
  API_PATH = 'http://localhost:3000/';


  constructor(private httpCliente: HttpClient) { }

  autenticar(usuario: string, senha:string): Observable<any>{
    return this.httpCliente.post(`${this.API_PATH}user/login`,{
      userName: usuario,
      password: senha
    });
  }
}
