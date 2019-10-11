import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente.model';
import { ClienteService } from '../../services/cliente/cliente.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] = [];
  cliente = Cliente;
  cargando = true;

  constructor(public clienteService: ClienteService,
              public activatedRoute: ActivatedRoute) { }

  ngOnInit() {

  this.activatedRoute.paramMap.subscribe(params => {
    // tslint:disable-next-line: prefer-const
    let page: number = +params.get('page');
    console.log('esto da el pageee*****' + page);
    if (!page) {
      page = 0;
    }
    // this.cargarClientesPaginado();
    this.clienteService.cargarClientesPages(page).subscribe(cliente => {
      console.log(cliente.content);
      this.clientes = cliente.content;
      console.log(this.clientes);
    });
  });
  }

  cargarClientes() {
    this.cargando = true;
    this.clienteService.cargarClientes().subscribe(clientes => {
    console.log(clientes);
    this.clientes = clientes;
    this.cargando = false;
    });
  }
  /*cargarClientesPaginado() {
    this.clienteService.cargarClientesPages(this.page).subscribe(cliente => {
      console.log(cliente.content);
      this.clientes = cliente.content;
      console.log(this.clientes);
    });
  }*/

  obtenerCliente(id: String) {
    this.clienteService.obtenerCliente(id).subscribe(clientes => {
    console.log('Resultado de obtener Cliente' + clientes);
    });
    }
  borrarCliente(id: String) {
    this.clienteService.borrarCliente(id).subscribe(cliente => {
     console.log('hole');
     this.cargarClientes();
    });
    }
  }
