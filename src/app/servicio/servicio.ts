import { Tarifa } from '../tarifa/tarifa';

export class Servicio {
  idServicio: number;
  placa: string;
  tipoVehiculo: string;
  cilindraje: number;
  fechaIngreso:string;
  tarifa: Tarifa;
}
