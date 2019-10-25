import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { ClientesComponent } from './clientes/clientes.component';
import { FormClienteComponent } from './form-cliente/form-cliente.component';
import { PerfilComponent } from './perfil/perfil.component';
import { AuthGuard } from '../guards/auth.guard';
import { RoleGuard } from '../guards/role.guard';
import { DataTableComponent } from './data-table/data-table.component';
import { DetalleFacturaComponent } from './factura/detalle-factura.component';


const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard' } },
            { path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas' } },
            { path: 'rxjs', component: RxjsComponent, data: { titulo: 'RxJs' } },
            { path: 'clientes', component: ClientesComponent, data: { titulo: 'Clientes' } },
            { path: 'Tabla', component: DataTableComponent, data: { titulo: 'tabla' } },
            { path: 'clientes/form', component: FormClienteComponent, canActivate: [AuthGuard, RoleGuard], data: { role: 'ROLE_ADMIN' } },
            { path: 'clientes/form/:id', component: FormClienteComponent, data: { titulo: 'Form' }, canActivate: [AuthGuard]  },
            { path: 'clientes/page/:page', component: ClientesComponent, data: { titulo: 'Pages' } },
            { path: 'clientes/perfil/:id', component: PerfilComponent, data: { titulo: 'Pages' } },
            { path: 'clientes/factura/:id', component: DetalleFacturaComponent, data: { titulo: 'Factura' } },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
        ]
    }
];


export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
