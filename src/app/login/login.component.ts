import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import swal from 'Sweetalert';
import { Usuario } from '../models/usuario.model';
declare function init_plugins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // Formulario
  form: FormGroup;


  usuarios: Usuario[] = [];
  usuario: Usuario;
  email = new FormControl('', [Validators.required, Validators.email]);
  username = new FormControl('', [Validators.required]);

  constructor( public router: Router) {
    this.usuario = new Usuario();
   }

  ngOnInit() {
    init_plugins();
    this.form = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.maxLength(10)])
    });

  }

  /*login(): void {
    console.log(this.usuario);
    if (this.usuario.username == null || this.usuario.password == null) {
      swal('Error Login', 'Username vacias', 'error');
      return;
    }

  }*/
  login() {
    console.log(this.form.value);
    // tslint:disable-next-line: prefer-const
    let user = new Usuario();
    user.nombre = this.form.value.nombre;
    console.log(user);
  }
  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  /* ****************************** */
  public hasError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  }

  private executeOwnerCreation = (ownerFormValue) => { };

}
/// https://code-maze.com/angular-material-form-validation/