import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {reinicio} from '../actions/contadorActions'

@Component({
  selector: 'app-reinicio',
  templateUrl: './reinicio.component.html',
  styleUrls: ['./reinicio.component.scss']
})
export class ReinicioComponent {

  constructor(private store: Store){

  }

  reiniciar(){
    this.store.dispatch(reinicio())
  }
}
