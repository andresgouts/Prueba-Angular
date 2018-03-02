import { Servicio } from '../servicio/servicio';

export class factura {
  idFactura: number;
  diasFacturados: number;
  horasFacturadas: number;
  subtotal: number;
  valorOtrosConceptos: number;
  totalFactura: number;
  servicio: Servicio
}
