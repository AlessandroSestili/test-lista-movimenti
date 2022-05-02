import { NgModule } from '@angular/core';
import { ListaMovimentiComponentComponent } from './lista-movimenti-component.component';

import { FlexLayoutModule } from "@angular/flex-layout";
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ListaMovimentiComponentComponent
  ],
  imports: [
    FlexLayoutModule,
    CommonModule,
    HttpClientModule,

    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatTableModule
  ],
  exports: [
    ListaMovimentiComponentComponent
  ]
})
export class ListaMovimentiComponentModule { }
