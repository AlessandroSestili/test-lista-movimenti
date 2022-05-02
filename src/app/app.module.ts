import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ListaMovimentiComponentModule } from 'projects/lista-movimenti-component/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ListaMovimentiComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
