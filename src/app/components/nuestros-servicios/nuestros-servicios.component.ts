import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-nuestros-servicios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nuestros-servicios.component.html',
  styleUrls: ['./nuestros-servicios.component.css'],
  encapsulation: ViewEncapsulation.None // <--- Esto es clave
})
export class NuestrosServiciosComponent {

}

