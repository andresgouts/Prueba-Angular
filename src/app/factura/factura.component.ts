import { Component, OnInit } from '@angular/core';
import { factura } from './factura';
import { FacturaService } from './factura.service'
import swal from 'sweetalert2'

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent {
  titulo:string = 'Facturar servicio';
  factura: factura = new factura();
  placa: string;
  mensaje: string;

  constructor(private facturaService: FacturaService){
    this.placa = '';
  }

  public facturarServicio(): void{
    swal({
  title: `Desea sacar el vehiculo de placa ${this.placa}?`,
  text: "Se procedera a facturar el servicio!",
  type: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Si, facturar',
  cancelButtonText: 'No, cancelar!',
  confirmButtonClass: 'btn btn-success',
  cancelButtonClass: 'btn btn-danger',
  buttonsStyling: false,
  reverseButtons: true
}).then((result) => {
  if (result.value) {
    this.facturaService.facturarVehiculo(this.placa).subscribe(
      data => {
        this.mensaje = data;
        this.placa = '';
        swal(this.mensaje);
      }
    );
  } else if (
    // Read more about handling dismissals
    result.dismiss === swal.DismissReason.cancel
  ) {
    swal(
      'No se ha sacado el vehiculo',
      'El vehiculo continua en el parqueadero',
      'error'
    )
  }
})
  }
}
