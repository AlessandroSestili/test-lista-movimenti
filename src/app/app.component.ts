import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'test-project';
  data: any;
  subscriptionEnd: boolean = false;
  movimentiPolizzaController: any;

  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.http.get('./assets/mocked-data/getPolizzaMovimenti.json').subscribe({
      next: ((_data: any) => {
        console.log("data subscribe", _data);
        this.data = _data;
        this.movimentiPolizzaController = this.data
      }),
      error: ((error) => {
        console.log(error);
      }),
      complete: ( () => this.subscriptionEnd = true )
    })
  }
}
