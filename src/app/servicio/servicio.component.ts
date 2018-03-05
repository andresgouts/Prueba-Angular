import { Component, OnInit } from '@angular/core';
import { Servicio } from './servicio';
import { ServicioService } from './servicio.service'
import { Observable } from 'rxjs/Observable'
import { Router } from '@angular/router'

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css']
})
export class ServicioComponent {
  titulo:String = 'Ingresar Vehiculo';
  servicios: Servicio[];
  servicio: Servicio = new Servicio();
  mensaje: String = 'No ha cambiado';

  constructor(private servicioService: ServicioService, private router: Router){

   }

   ngOnInit() {
     this.servicioService.getServiciosActivos().subscribe(
       servicios => this.servicios = servicios
     );
   }

   public crear(): void{
     this.servicioService.crearServicio(this.servicio).subscribe(
      Response => this.router.navigate(['/servicio'])
     );
     console.log(this.mensaje);
   }

}
