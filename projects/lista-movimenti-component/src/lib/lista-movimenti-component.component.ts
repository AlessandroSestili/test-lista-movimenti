import { ViewChild } from '@angular/core';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'lib-lista-movimenti-component',
  templateUrl: './lista-movimenti-component.component.html',
  styleUrls: ['./lista-movimenti-component.component.scss'],
})
export class ListaMovimentiComponentComponent implements OnInit {
  @Input() movimentiPolizza: any;
  @Input() movimentiPolizzaController!: any;

  movimentiDatasource!: MatTableDataSource<any>;
  displayedColumns: string[] = []


  constructor() { }

  ngOnInit(): void {
    console.log(this.movimentiPolizzaController);
    
  }

}
