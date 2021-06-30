//Es un modulo para exportar modulos de una sola vez.
//Se borra el CommonsModule ya que no se usa porque solo es un modulo en el que se van a hacer imports/exports
import { NgModule } from '@angular/core';

import {ButtonModule} from 'primeng/button'; //Es buena practica ordenar los imports alfabeticamente.
import {CardModule} from 'primeng/card';
import {FieldsetModule} from 'primeng/fieldset';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import {TableModule} from 'primeng/table';
import {ToolbarModule} from 'primeng/toolbar';

@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    FieldsetModule,
    MenubarModule,
    ToolbarModule,
    TableModule
  ]
})

export class PrimeNgModule { }
