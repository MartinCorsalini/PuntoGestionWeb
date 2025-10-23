import { Component } from '@angular/core';
import { CarruselComponent } from "../../components/carrusel/carrusel.component";
import { CertificadoTangoComponent } from "../../components/certificado-tango/certificado-tango.component";
import { TangoProductosComponent } from "../../components/tango-productos/tango-productos.component";
import { ContactoComponent } from '../../components/contacto/contacto.component';
import { NuestrosServiciosComponent } from "../../components/nuestros-servicios/nuestros-servicios.component";
import { WaveComponent } from "../../components/wave/wave.component";

@Component({
  selector: 'app-inicio-page',
  imports: [CarruselComponent, CertificadoTangoComponent, TangoProductosComponent, ContactoComponent, NuestrosServiciosComponent, WaveComponent],
  templateUrl: './inicio-page.component.html',
  styleUrl: './inicio-page.component.css'
})
export class InicioPageComponent {

}
