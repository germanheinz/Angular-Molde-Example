import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Factura } from 'src/app/models/factura.model';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  private urlEndPoint: string = 'http://localhost:8080/api/clientes/factura';

  constructor(public http: HttpClient) { }

  getFatcura(id: number): Observable<Factura> {
    return this.http.get<Factura>(this.urlEndPoint + '/' + id);
    // o tambien se puede llamar asi
    // return this.http.get<Factura>(`${this.urlEndPoint}/${id}`);
  }
}
