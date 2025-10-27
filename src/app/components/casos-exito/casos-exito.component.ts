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
      empresa: 'Puppis',
      videoId: 'h89nQr0yGv4',
      descripcion: '"Decidimos adquirir SAP Business One, un ERP escalable, en lugar de desarrollar uno desde cero. Elegimos SAP Business One por su reconocimiento internacional y porque ofrece una gran cantidad de módulos y funcionalidades útiles para nosotros."'
    },
    {
      empresa: 'Hubbing Latam',
      videoId: 'h89nQr0yGv4', // Reemplaza con el ID real del video
      descripcion: '"Elegimos SAP Business One y Seidor por su reputación, flexibilidad y capacidad de integración. Este software nos permitirá crecer y expandir nuestras operaciones. Seidor, con su experiencia y excelente servicio de consultoría, asegura una implementación exitosa."'
    }
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
