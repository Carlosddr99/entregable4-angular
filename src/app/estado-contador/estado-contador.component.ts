import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-estado-contador',
  templateUrl: './estado-contador.component.html',
  styleUrls: ['./estado-contador.component.scss']
})
export class EstadoContadorComponent {

  count: Observable<number>;

  constructor(private store: Store<{contador :number}>){
    this.count = store.pipe(select('contador'));
    console.log(this.count)
  }

}
