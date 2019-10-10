import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente.model';
import { ClienteService } from '../../services/cliente/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] = [];
  cliente = Cliente;
  cargando = true;

  constructor(public clienteService: ClienteService) { }

  ngOnInit() {
  this.cargarClientes();
  }

  cargarClientes() {
    this.cargando = true;
    this.clienteService.cargarClientes().subscribe(clientes => {
    console.log(clientes);
    this.clientes = clientes;
    this.cargando = false;
  });
  }
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
