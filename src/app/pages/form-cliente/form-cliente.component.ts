import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/service.index';
import { Router, ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/models/cliente.model';

@Component({
  selector: 'app-form-cliente',
  templateUrl: './form-cliente.component.html',
  styleUrls: ['./form-cliente.component.css']
})
export class FormClienteComponent implements OnInit {

  private cliente: Cliente = new Cliente();
  clientes: Cliente[] = [];
  titulo = 'Crear Cliente';

  errores: string[];

  constructor(private clienteService: ClienteService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.cargarCliente();
  }
  cargarCliente(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.clienteService.getCliente(id).subscribe((cliente) => this.cliente = cliente);
      }
    });
  }
  update(): void {
    console.log(this.cliente.customerUrl);
    this.clienteService.update(this.cliente)
      .subscribe(
        json => {
          this.router.navigate(['/clientes']);
         // swal('Cliente Actualizado', `${json.mensaje}: ${json.cliente.nombre}`, 'success');
        },
        err => {
          this.errores = err.error.errors as string[];
          console.error('Código del error desde el backend: ' + err.status);
        console.error(this.errores);
        // console.log(err.error);
        }
      );
  }
  onSubmit(data: any) {
console.log(data);
  }
}
