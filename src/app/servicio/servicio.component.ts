import { Component, OnInit } from '@angular/core';
import { Servicio } from './servicio';
import { ServicioService } from './servicio.service'
import { Observable } from 'rxjs/Observable'
import { Router } from '@angular/router'
import swal from 'sweetalert2'

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css']
})
export class ServicioComponent {
  titulo:String = 'Ingresar Vehiculo';
  servicios: Servicio[];
  servicio: Servicio = new Servicio();
  mensaje: string;

  constructor(private servicioService: ServicioService, private router: Router){

   }

   ngOnInit() {
     this.cargarVehiculos()
   }

   public cargarVehiculos(): void {
     this.servicioService.getServiciosActivos().subscribe(
       servicios => this.servicios = servicios
     );
   }

   public crear(): void{
     this.servicioService.crearServicio(this.servicio).subscribe(
      data => {this.mensaje = data;
         this.servicio = new Servicio();
         this.cargarVehiculos();
         swal(this.mensaje);
      }
     );

   }

}
