import { API_PATH } from './../../../environments/environment';
import { NovoUsuario } from './novo-usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NovoUsuarioService {

  constructor(private httpClient: HttpClient) { }

  cadastraNovoUsuario(novoUsuario: NovoUsuario){
    return this.httpClient.post(`${API_PATH}user/signup`,novoUsuario);
  }
}
