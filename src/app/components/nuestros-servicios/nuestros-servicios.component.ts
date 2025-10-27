import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-nuestros-servicios',
  standalone: true,
  imports: [CommonModule,ScrollRevealDirective],
  templateUrl: './nuestros-servicios.component.html',
  styleUrls: ['./nuestros-servicios.component.css'],
  encapsulation: ViewEncapsulation.None // <--- Esto es clave
})
export class NuestrosServiciosComponent {
  services = [
    { icon: 'fas fa-user-tie', title: 'Asesoramiento profesional', description: 'Nuestro staff te ayudará a elegir la mejor solución acorde a tu empresa.' },
    { icon: 'fas fa-gear', title: 'Implementación y coordinación', description: 'Optimizamos transacciones y mejoramos procesos operativos.' },
    { icon: 'fas fa-graduation-cap', title: 'Capacitación', description: 'Brindamos formación continua en cada uno de los diferentes procesos.' },
    { icon: 'fas fa-lightbulb', title: 'Consultoría', description: 'Impulsamos la innovación con información sobre las últimas novedades del sistema.' },
    { icon: 'fas fa-headset', title: 'Soporte técnico', description: 'Asistencia dinámica y remota cuando el cliente lo necesite.' },
    { icon: 'fas fa-handshake', title: 'El mejor respaldo', description: 'Con el respaldo de Axoft Argentina S.A., líder en software ERP.' },
  ];
}

