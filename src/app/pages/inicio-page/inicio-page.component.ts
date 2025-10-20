import { Component } from '@angular/core';
import { CarruselComponent } from "../../components/carrusel/carrusel.component";
import { CertificadoTangoComponent } from "../../components/certificado-tango/certificado-tango.component";

@Component({
  selector: 'app-inicio-page',
  imports: [CarruselComponent, CertificadoTangoComponent],
  templateUrl: './inicio-page.component.html',
  styleUrl: './inicio-page.component.css'
})
export class InicioPageComponent {

}
