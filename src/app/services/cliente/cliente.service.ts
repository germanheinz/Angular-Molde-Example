import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../../config/config';
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent } from '@angular/common/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import { Cliente } from 'src/app/models/cliente.model';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';


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

   /*cargarClientesPages(page: number): Observable<any> {
    const url = URL_SERVICIOS + '/clientes/page/' + page;
    console.log(url);
    return this.http.get(url)
    .map((resp: any) => {
     console.log(resp.content);
     (resp.content as Cliente[]).map(cliente => {
        console.log(cliente);
        return cliente;
     });
     return resp;
    });
  }*/

  cargarClientesPages(page: number): Observable<any> {
    const url = URL_SERVICIOS + '/clientes/page/' + page;
    console.log(url);
    return this.http.get(url)
    .pipe(
      tap((resp: any) => {
        console.log('tap 1');
        (resp.content as Cliente[]).forEach(cliente => {
            console.log(cliente.nombre);
        });
      }),
    );
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

        // Maneje todos los errores en el backend - si alla hay error
        // sera un bad Request (400) entonces pregunto si el status es 400
        if (e.status === 400) {
          return throwError(e);
        }

        console.error(e.error.mensaje);
        // swal(e.error.mensaje, e.error.error, 'error');
        return throwError(e);
      })
    );
  }
  // Tengo que cambiar el retorno, que es un obsevable orignalmente, 
  // se convierte en un HttpEvent
  // subirFoto(archivo: File, id): Observable<Cliente> {
    subirFoto(archivo: File, id): Observable<HttpEvent<{}>> {
    const url = URL_SERVICIOS + '/clientes/upload';
    console.log('/*****/' + url);
    const formData = new FormData();
    formData.append('archivo', archivo);
    formData.append('id', id);

    /*
    Sacado de la documentacion de Angular.io
    const req = new HttpRequest('POST', '/upload/file', file, {
      reportProgress: true
    });
    */
//  Debo cambiar esta forma para que aparezca barra progreso
    // return this.http.post(url, formData).pipe(
    const req = new HttpRequest('POST', url, formData, {
      reportProgress: true
    });
    return this.http.request(req);
  }

}
