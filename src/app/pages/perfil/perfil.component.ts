import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente.model';
import { ClienteService } from '../../services/cliente/cliente.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {


  cliente: Cliente;
// ActivatedRoute es para editar un cliente para podernos subscribir cuando cambia un parametro en ID
  constructor(public clienteService: ClienteService,
              public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
    let id: number = +params.get('id');
    console.log(id);
    if (id) {
    this.clienteService.getCliente(id).subscribe(cliente => {
    this.cliente = cliente;
});
    }
    });
  }




}
