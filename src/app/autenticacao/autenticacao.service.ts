import { UsuarioService } from './usuario/usuario.service';
import { API_PATH } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {


  constructor(private httpCliente: HttpClient, private usuarioService: UsuarioService) { }

  autenticar(usuario: string, senha:string): Observable<HttpResponse<any>>{
    return this.httpCliente.post(`${API_PATH}user/login`,{
      userName: usuario,
      password: senha
    },
    { observe: 'response'}
    ).pipe(
      tap((res) =>{
        const authToken = res.headers.get('x-access-token') ?? '';
        this.usuarioService.salvaToken(authToken);
      })
    );
  }
}
