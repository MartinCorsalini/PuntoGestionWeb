import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface CasoExito {
  empresa: string;
  videoId: string;
  descripcion: string;
}

@Component({
  selector: 'app-casos-exito',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './casos-exito.component.html',
  styleUrls: ['./casos-exito.component.css']
})
export class CasosExitoComponent {
  casos: CasoExito[] = [
    {
      empresa: 'Buena Proa',
      videoId: 'pyrhXWME5O0',
      descripcion: "Silvana, de Buena Proa, comparte su experiencia incorporando Tango Software junto al acompañamiento de Punto Gestión. A lo largo del testimonio, nos cuenta: Qué hace Buena Proa y cómo se desarrolla dentro de su rubro. Cómo Tango, junto al soporte cercano de nuestro equipo, les permitió optimizar procesos, mantener el control y seguir creciendo mientras la empresa escalaba. El impacto positivo que tuvo la herramienta en su gestión diaria y en el desarrollo sostenido del negocio.'"
    },
    {
      empresa: 'Buena Proa',
      videoId: 'pyrhXWME5O0', // Reemplaza con el ID real del video
      descripcion: "Silvana, de Buena Proa, comparte su experiencia incorporando Tango Software junto al acompañamiento de Punto Gestión. A lo largo del testimonio, nos cuenta: Qué hace Buena Proa y cómo se desarrolla dentro de su rubro. Cómo Tango, junto al soporte cercano de nuestro equipo, les permitió optimizar procesos, mantener el control y seguir creciendo mientras la empresa escalaba. El impacto positivo que tuvo la herramienta en su gestión diaria y en el desarrollo sostenido del negocio.'"
    },
  ];

  private videoUrlCache = new Map<string, SafeResourceUrl>();

  constructor(private sanitizer: DomSanitizer) {
    // Pre-sanitizar todas las URLs al inicializar
    this.casos.forEach(caso => {
      this.videoUrlCache.set(
        caso.videoId,
        this.sanitizer.bypassSecurityTrustResourceUrl(
          `https://www.youtube.com/embed/${caso.videoId}`
        )
      );
    });
  }

  getVideoUrl(videoId: string): SafeResourceUrl {
    return this.videoUrlCache.get(videoId)!;
  }

  trackByCaso(index: number, caso: CasoExito): string {
    return caso.videoId;
  }
}
