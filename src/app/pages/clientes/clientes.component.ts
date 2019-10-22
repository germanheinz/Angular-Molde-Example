import { Component, OnInit, ViewChild } from '@angular/core';
import { Cliente } from 'src/app/models/cliente.model';
import { ClienteService } from '../../services/cliente/cliente.service';
import { ActivatedRoute } from '@angular/router';
import { ModalService } from '../../services/modal/modal.service';
import { UsuarioService } from '../../services/auth/usuario.service';
import {MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {


  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  clientes: Cliente[] = [];
  cliente = Cliente;
  cargando = true;
  paginadorPadre: any;
  clienteSeleccionado: Cliente;
  tablePadre: any;

  constructor(public clienteService: ClienteService,
              public activatedRoute: ActivatedRoute,
              public modalService: ModalService,
              public usuarioService: UsuarioService) { }

  ngOnInit() {
  this.dataSource.sort = this.sort;
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
