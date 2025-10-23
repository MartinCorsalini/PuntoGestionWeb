import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nuestros-servicios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nuestros-servicios.component.html',
  styleUrls: ['./nuestros-servicios.component.css']
})
export class NuestrosServiciosComponent {
  services = [
    {
      icon: 'fa-solid fa-user-tie',
      title: 'Asesoramiento profesional',
      description:
        'Nuestro staff te ayudará a elegir la mejor solución acorde a tu empresa.',
    },
    {
      icon: 'fa-solid fa-gear',
      title: 'Implementación y coordinación',
      description:
        'Optimizamos transacciones y mejoramos procesos operativos.',
    },
    {
      icon: 'fa-solid fa-graduation-cap',
      title: 'Capacitación',
      description:
        'Brindamos formación continua en cada uno de los diferentes procesos.',
    },
    {
      icon: 'fa-solid fa-lightbulb',
      title: 'Consultoría',
      description:
        'Impulsamos la innovación con información sobre las últimas novedades del sistema.',
    },
    {
      icon: 'fa-solid fa-headset',
      title: 'Soporte técnico',
      description:
        'Asistencia dinámica y remota cuando el cliente lo necesite.',
    },
    {
      icon: 'fa-solid fa-handshake',
      title: 'El mejor respaldo',
      description:
        'Con el respaldo de Axoft Argentina S.A., líder en software ERP.',
    },
  ];
}
