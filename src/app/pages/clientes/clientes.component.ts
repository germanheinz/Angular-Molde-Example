import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente.model';
import { ClienteService } from '../../services/cliente/cliente.service';
import { ActivatedRoute } from '@angular/router';
import { ModalService } from '../../services/modal/modal.service';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] = [];
  cliente = Cliente;
  cargando = true;
  paginadorPadre: any;
  clienteSeleccionado: Cliente;

  constructor(public clienteService: ClienteService,
              public activatedRoute: ActivatedRoute,
              public modalService: ModalService) { }

  ngOnInit() {

  this.activatedRoute.paramMap.subscribe(params => {
    // tslint:disable-next-line: prefer-const
    let page: number = +params.get('page');
    console.log('esto da el pageee*****' + page);
    if (!page) {
      page = 0;
    }
    // this.cargarClientesPaginado();
    this.clienteService.cargarClientesPages(page).subscribe(response => {
      console.log(response.totalPages);
      this.clientes = response.content as Cliente[];
      console.log(this.clientes);
      this.paginadorPadre = response;
    });
  });
  this.modalService.notificarUpload.subscribe(cliente => {
    this.clientes = this.clientes.map(clienteOriginal => {
      if (cliente.id === clienteOriginal.id) {
        clienteOriginal.foto = cliente.foto;
      }
      return clienteOriginal;
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

  obtenerCliente(id: string) {
    this.clienteService.obtenerCliente(id).subscribe(clientes => {
    console.log('Resultado de obtener Cliente' + clientes);
    });
    }
  borrarCliente(id: string) {
    this.clienteService.borrarCliente(id).subscribe(cliente => {
     console.log('hole');
     this.cargarClientes();
    });
    }
    abrirModal(cliente: Cliente) {
      this.clienteSeleccionado = cliente;
      this.modalService.abrirModal();
    }
  }
