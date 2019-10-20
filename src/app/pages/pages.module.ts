
import { NgModule } from '@angular/core';
import { PAGES_ROUTES } from './pages.routes';

import { SharedModule } from '../shared/shared.module';

import { FormsModule } from '@angular/forms';


// ng2-charts
import { ChartsModule } from 'ng2-charts';

import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';

import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { ClientesComponent } from './clientes/clientes.component';
import { CommonModule } from '@angular/common';
import { FormClienteComponent } from './form-cliente/form-cliente.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { PerfilComponent } from './perfil/perfil.component';

@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        PromesasComponent,
        RxjsComponent,
        ClientesComponent,
        FormClienteComponent,
        PaginatorComponent,
        PerfilComponent
    ],
    exports: [
        DashboardComponent
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule,
        CommonModule
    ]
})
export class PagesModule { }
