import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/auth/usuario.service';
import swal from 'sweetalert';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor(public usuarioService: UsuarioService, public router: Router) { }

  ngOnInit() {
    console.log();
  }
  logout(): void {
    swal('Logout', `Hola ${this.usuarioService.usuario.username}, has cerrado session`, 'success');
    this.router.navigate(['/login']);
    this.usuarioService.logout();
  }
}
