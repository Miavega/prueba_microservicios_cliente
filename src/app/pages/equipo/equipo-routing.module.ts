import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EquipoComponent } from './equipo.component';
import { RegistroComponent } from './registro/registro.component';


const routes: Routes = [{
    path: '',
    component: EquipoComponent,
    children: [
      {
        path: 'registro',
        component: RegistroComponent,
      },
    ],
  }];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class EquipoRoutingModule { }