import { Injectable } from '@angular/core';
import { Servicio } from './servicio';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/Observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class ServicioService {
  private urlEndPointLista: string = 'http://localhost:8080/vigilante/consultar'
  private urlEndPointIngresar: string = 'http://localhost:8080/vigilante/ingresar'
  private httpHeaders = new HttpHeaders({'content-type':'application/json'})

  constructor(private http:HttpClient){
  }

  //Metodo que trae los vehiculos que estan estacionados
  getServiciosActivos(): Observable<Servicio[]>{
    return this.http.get(this.urlEndPointLista).pipe(
      map((response) => response as Servicio[])
    );
  }

  //Crear un nuevo servicios
  crearServicio(servicio: Servicio): Observable<string>{
    console.log('ingreso')
    return this.http.post(this.urlEndPointIngresar, servicio, {responseType: 'text'})
  }

}
