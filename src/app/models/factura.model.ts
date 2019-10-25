import { Cliente } from './cliente.model';
import { ItemFactura } from './item-factura';


// Modelo Factura

export class Factura {

    id: number;
    descripcion: string;
    observacion: string;
    items: Array<ItemFactura> = [];
    cliente: Cliente;
    total: number;
    createAt: string;

}
