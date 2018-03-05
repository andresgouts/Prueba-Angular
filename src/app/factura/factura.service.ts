import { Injectable } from '@angular/core';
import { factura } from './factura';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class FacturaService {
  private urlEndPointFacturar: string = 'http://localhost:8080/vigilante/sacar'

  constructor(private http:HttpClient){

  }

  facturarVehiculo(placa): Observable<string>{
    return this.http.get(`${this.urlEndPointFacturar}/${placa}`, {responseType: 'text'})
  }


}
