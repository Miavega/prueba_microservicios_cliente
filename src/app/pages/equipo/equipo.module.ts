import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeModule } from '../../@theme/theme.module';

import { EquipoRoutingModule } from './equipo-routing.module';
import { RegistroComponent } from './registro/registro.component';
import { EquipoComponent } from './equipo.component';

import { EquipoService } from '../../services/equipo/equipo.service';

@NgModule({
  declarations: [
    RegistroComponent,
    EquipoComponent
  ],
  imports: [
    EquipoRoutingModule,
    ThemeModule,
    CommonModule
  ],
  providers: [
    EquipoService
  ]
})
export class EquipoModule { }
