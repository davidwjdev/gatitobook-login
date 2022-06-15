import { AutenticacaoService } from './../../autenticacao/autenticacao.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario='';
  senha='';

  constructor(private authService: AutenticacaoService) { }

  ngOnInit(): void {
  }

  login(){
    this.authService.autenticar(this.usuario, this.senha).subscribe({
      next: () => console.log("autenticado com sucesso"),
      error: (e) => {
        console.error("Usuario ou senha inválido");
        console.error(e);
      },
    })
    console.log(this.usuario);
    console.log(this.senha);
  }
}
