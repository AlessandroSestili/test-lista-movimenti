import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ListaMovimentiComponentModule } from 'projects/lista-movimenti-component/src/public-api';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ListaMovimentiComponentModule,
    BrowserAnimationsModule,

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
