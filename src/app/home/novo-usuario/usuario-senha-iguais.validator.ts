import { AbstractControl, ValidationErrors } from '@angular/forms';
export class usuarioSenhaIguaisValidator {
  static usuarioSenhaIguais(control: AbstractControl): ValidationErrors | null {
    const username = control.get('userName')?.value ?? '';
    const password = control.get('password')?.value ?? '';

    if (username.trim() + password.trim()) {
      console.log('passou aqui');
      return username !== password ? null : { senhaIgualUsuario: true };
    } else {
      return null;
    }
  }
}
