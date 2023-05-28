import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstadoContadorComponent } from './estado-contador/estado-contador.component';
import { SumaCincoComponent } from './suma-cinco/suma-cinco.component';
import { RestaCincoComponent } from './resta-cinco/resta-cinco.component';
import { ReinicioComponent } from './reinicio/reinicio.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './reducer/contadorReducer';

@NgModule({
  declarations: [
    AppComponent,
    EstadoContadorComponent,
    SumaCincoComponent,
    RestaCincoComponent,
    ReinicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({contador: counterReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
