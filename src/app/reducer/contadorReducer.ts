import { createReducer,on } from "@ngrx/store";
import {reinicio,restaCinco,sumaCinco} from "../actions/contadorActions"

export const initialState:number = 0;

export const counterReducer = createReducer( initialState,
    on(sumaCinco, state => state+5),
    on(restaCinco, state =>state-5),
    on(reinicio, state => state=0))