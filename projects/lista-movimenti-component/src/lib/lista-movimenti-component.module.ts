import { NgModule } from '@angular/core';
import { ListaMovimentiComponentComponent } from './lista-movimenti-component.component';

import { FlexLayoutModule } from "@angular/flex-layout";
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    ListaMovimentiComponentComponent
  ],
  imports: [
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ],
  exports: [
    ListaMovimentiComponentComponent
  ]
})
export class ListaMovimentiComponentModule { }
