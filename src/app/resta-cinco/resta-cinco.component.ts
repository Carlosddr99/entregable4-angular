import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {restaCinco} from '../actions/contadorActions'

@Component({
  selector: 'app-resta-cinco',
  templateUrl: './resta-cinco.component.html',
  styleUrls: ['./resta-cinco.component.scss']
})
export class RestaCincoComponent {

  constructor(private store: Store){

  }

  restarCinco(){
    this.store.dispatch(restaCinco())
  }
}
