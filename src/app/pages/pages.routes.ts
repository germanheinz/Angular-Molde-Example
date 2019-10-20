import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { ClientesComponent } from './clientes/clientes.component';
import { FormClienteComponent } from './form-cliente/form-cliente.component';
import { PerfilComponent } from './perfil/perfil.component';



const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard' } },
            { path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas' } },
            { path: 'rxjs', component: RxjsComponent, data: { titulo: 'RxJs' } },
            { path: 'clientes', component: ClientesComponent, data: { titulo: 'Clientes' } },
            { path: 'clientes/form', component: FormClienteComponent, data: { titulo: 'Form' } },
            { path: 'clientes/form/:id', component: FormClienteComponent, data: { titulo: 'Form' } },
            { path: 'clientes/page/:page', component: ClientesComponent, data: { titulo: 'Pages' } },
            { path: 'clientes/perfil/:id', component: PerfilComponent, data: { titulo: 'Pages' } },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
        ]
    }
];


export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
