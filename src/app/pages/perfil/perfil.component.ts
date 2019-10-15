import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente.model';
import { ClienteService } from '../../services/cliente/cliente.service';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {


  cliente: Cliente;
  private fotoSeleccionada: File;
// ActivatedRoute es para editar un cliente para podernos subscribir cuando cambia un parametro en ID
  constructor(public clienteService: ClienteService,
              public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
    const id: number = +params.get('id');
    console.log(id);
    if (id) {
    this.clienteService.getCliente(id).subscribe(cliente => {
    this.cliente = cliente;
    });
    }
    });
  }
  seleccionarFoto(event) {
    this.fotoSeleccionada = event.target.files[0];
    console.log(this.fotoSeleccionada);
    console.log(this.fotoSeleccionada.name);
    // Valido con tipe si es -1 no es una imagen, tiene que contener en type la palabra image
    if (this.fotoSeleccionada.type.indexOf('image') < 0) {
      swal('Error!', 'El archivo debe ser un tipo Imagen', 'error');
    }
  }
  subirFoto() {
    if (!this.fotoSeleccionada) {
      swal('Error!', 'No selecciono ninguna imagen!', 'error');
    } else {
    this.clienteService.subirFoto(this.fotoSeleccionada, this.cliente.id).subscribe(cliente => {
    this.cliente = cliente;
    swal('Good job!', 'You clicked the button!', 'success');
    console.log('foto subida correctamente');
    });
  }
  }




}
