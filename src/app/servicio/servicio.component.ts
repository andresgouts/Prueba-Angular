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

   public facturarVehiculo(servicio: Servicio): void {
     swal({
       title: `Esta seguro?`,
       text: `se facturara el vehiculo de placas ${servicio.placa}`,
       type: 'warning',
       showCancelButton: true,
       confirmButtonColor: '#3085d6',
       cancelButtonColor: '#d33',
       cancelButtonText: 'Cancelar',
       confirmButtonText: 'si, facturar!'
     }).then((result) => {
       if (result.value) {
         this.servicioService.facturarVehiculo(servicio.placa).subscribe(
           data => {this.mensaje = data;
             swal(this.mensaje);
             this.cargarVehiculos;
            }
         );
       }
     })
    }

}
