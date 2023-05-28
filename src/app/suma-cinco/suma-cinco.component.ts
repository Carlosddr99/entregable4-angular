import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {sumaCinco} from '../actions/contadorActions'

@Component({
  selector: 'app-suma-cinco',
  templateUrl: './suma-cinco.component.html',
  styleUrls: ['./suma-cinco.component.scss']
})
export class SumaCincoComponent {

  constructor(private store: Store){

  }

  incrementarCinco(){
    this.store.dispatch(sumaCinco())
  }
}
