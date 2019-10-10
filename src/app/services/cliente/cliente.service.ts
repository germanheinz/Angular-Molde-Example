import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../../config/config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import { Cliente } from 'src/app/models/cliente.model';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable()
export class ClienteService {
  id: String;
  cliente: Cliente;

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(
    public router: Router,
    public http: HttpClient
    ) {
    console.log('Servicio cargar clientes');
    this.cargarClientes();
   }

   cargarClientes() {
     const url = URL_SERVICIOS + '/clientes';
     console.log(url);
     return this.http.get(url).map((resp: any) => {
      console.log(resp);
      return resp;
     });
   }
   obtenerCliente(id: String) {
     const url = URL_SERVICIOS + '/clientes/' + id;
     return this.http.get(url)
     .map((resp: any) =>
       resp
     );
   }
   borrarCliente(id: String) {
     const url = URL_SERVICIOS + '/clientes/' + id;
     return this.http.delete(url)
    .map(resp => {
      console.log(resp);
    });
}
// Pipe agarrara todos los posibles errores en catchError en caso se haber
  getCliente(id): Observable<Cliente> {
      const url = URL_SERVICIOS + '/clientes/' + id;
      return this.http.get<Cliente>(url)
      .pipe(
        catchError(e => {
        this.router.navigate(['/clientes']);
        console.log(e.error.mensaje);
        return throwError(e);
        })
        );
  }
  update(cliente: Cliente): Observable<any> {
    const url = URL_SERVICIOS + '/clientes/' + cliente.id;
    return this.http.put<any>(url, cliente, { headers: this.httpHeaders }).pipe(
      catchError(e => {

        if (e.status === 400) {
          return throwError(e);
        }

        console.error(e.error.mensaje);
        // swal(e.error.mensaje, e.error.error, 'error');
        return throwError(e);
      })
    );
  }

}
