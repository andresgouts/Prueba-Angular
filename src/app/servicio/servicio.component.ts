import { Component, OnInit } from '@angular/core';
import { Servicio } from './servicio';
import { ServicioService } from './servicio.service'
import { Observable } from 'rxjs/Observable'

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css']
})
export class ServicioComponent {
  titulo:String = 'Ingresar Vehiculo';
  servicios: Servicio[];

  constructor(private servicioService: ServicioService){

   }

   ngOnInit() {
     this.servicioService.getServiciosActivos().subscribe(
       servicios => this.servicios = servicios
     );
   }

}
