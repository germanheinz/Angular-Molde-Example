
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
import { DataTableComponent } from './data-table/data-table.component';
import { MaterialModule } from './material';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatListModule, MatIconModule, MatToolbarModule, MatSidenavModule } from '@angular/material';

@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        PromesasComponent,
        RxjsComponent,
        ClientesComponent,
        FormClienteComponent,
        PaginatorComponent,
        PerfilComponent,
        DataTableComponent,
    ],
    exports: [
        DashboardComponent,
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule,
        CommonModule,
        MatToolbarModule,
        MatSidenavModule,
        MaterialModule,
        MatIconModule,
        MatListModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule
    ]
})
export class PagesModule { }
