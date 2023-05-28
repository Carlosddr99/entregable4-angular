import { createAction } from "@ngrx/store";

export const sumaCinco = createAction('[Contador] Sumar Cinco');
export const restaCinco = createAction('[Contador] Restar Cinco');
export const reinicio = createAction('[Contador] Reiniciar');