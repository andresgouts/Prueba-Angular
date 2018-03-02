import { Injectable } from '@angular/core';
import { Servicio } from './servicio';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/Observable/of';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class ServicioService {
  private urlEndPointLista: string = 'http://localhost:8080/vigilante/consultar'

  constructor(private http:HttpClient){
  }

  //Metodo que trae los vehiculos que estan estacionados
  getServiciosActivos(): Observable<Servicio[]>{
    return this.http.get(this.urlEndPointLista).pipe(
      map((response) => response as Servicio[])
    );
  }

}
