import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ServicioComponent } from './servicio/servicio.component';
import { FacturaComponent } from './factura/factura.component';
import { ServicioService } from './servicio/servicio.service';
import { FacturaService } from './factura/factura.service';
import {FormsModule} from '@angular/forms';



const routes: Routes = [
  {path: '', redirectTo: '/servicio', pathMatch: 'full'},
  {path: 'servicio', component: ServicioComponent},
  {path: 'factura', component: FacturaComponent},
  {path: 'factura/:placa', component: FacturaComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ServicioComponent,
    FacturaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    ServicioService,
    FacturaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
