import { Component } from '@angular/core';
import { CarruselComponent } from "../../components/carrusel/carrusel.component";
import { CertificadoTangoComponent } from "../../components/certificado-tango/certificado-tango.component";
import { TangoProductosComponent } from "../../components/tango-productos/tango-productos.component";
import { ContactoComponent } from '../../components/contacto/contacto.component';
import { NuestrosServiciosComponent } from "../../components/nuestros-servicios/nuestros-servicios.component";
import { WaveComponent } from "../../components/wave/wave.component";
import { NuestrosClientesComponent } from "../../components/nuestros-clientes/nuestros-clientes.component";
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { CasosExitoComponent } from "../../components/casos-exito/casos-exito.component";
import { NosotrosComponent } from "../../components/nosotros/nosotros.component";



@Component({
  selector: 'app-inicio-page',
  imports: [CarruselComponent,

    TangoProductosComponent,
    ContactoComponent,
    NuestrosServiciosComponent,
    WaveComponent,
    NuestrosClientesComponent,
    ScrollRevealDirective,
    CasosExitoComponent,
    NosotrosComponent],
  templateUrl: './inicio-page.component.html',
  styleUrl: './inicio-page.component.css'
})
export class InicioPageComponent {

}
