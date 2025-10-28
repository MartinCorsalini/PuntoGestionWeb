import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { CommonModule } from '@angular/common';

interface Producto {
  nombre: string;
  imagen: string;
  descripcion: string;
  bgColor: string;
  btnClass: string;
}

@Component({
  selector: 'app-tango-productos',
  imports: [ScrollRevealDirective, CommonModule],
  templateUrl: './tango-productos.component.html',
  styleUrl: './tango-productos.component.css'
})
export class TangoProductosComponent implements OnInit, OnDestroy {
  currentIndex = 0;
  itemsPerView = 3;
  autoPlayInterval: any;

  productos: Producto[] = [
    {
      nombre: 'Tango Gestión',
      imagen: 'assets/TangoSoftware-Productos/png/TangoGestion_v2.png',
      descripcion: 'Software para PyMEs y grandes empresas, desarrollado para lograr el mejor resultado de la manera más fácil en el menor tiempo posible.',
      bgColor: '#2fa7df',
      btnClass: 'bg-white text-blue-600 hover:bg-gray-100'
    },
    {
      nombre: 'Tango Punto de Venta',
      imagen: 'assets/TangoSoftware-Productos/png/TangoPDV_v2.png',
      descripcion: 'Software para comercios minoristas, sucursales y/o franquicias. Es fácil de usar y cuenta con permisos y controles que le dan una total seguridad.',
      bgColor: '#2fa7df',
      btnClass: 'bg-white text-blue-600 hover:bg-gray-100'
    },
    {
      nombre: 'Tango Capital Humano',
      imagen: 'assets/TangoSoftware-Productos/png/Tango_Capitalhumano.png',
      descripcion: 'Software para Recursos Humanos, desarrollado para automatizar y mejorar cada etapa de la administración del personal, obteniendo los mejores resultados de manera sencilla y rápida.',
      bgColor: '#2fa7df',
      btnClass: 'bg-white text-blue-600 hover:bg-gray-100'
    },
    {
      nombre: 'Tango Estudios Contables',
      imagen: 'assets/TangoSoftware-Productos/png/TangoEECC_v2.png',
      descripcion: 'Software para estudios contables desarrollado para facilitar y potenciar el trabajo del contador cualquiera sea el tamaño de su empresa cliente.',
      bgColor: '#f47d30',
      btnClass: 'bg-white text-orange-600 hover:bg-gray-100'
    },
    {
      nombre: 'Tango Restó',
      imagen: 'assets/TangoSoftware-Productos/png/TangoResto_v2.png',
      descripcion: 'Software gastronómico que se adapta a todos los tamaños de negocios y permite una gestión integrada en todos los formatos.',
      bgColor: '#e51937',
      btnClass: 'bg-white text-red-600 hover:bg-gray-100'
    },
    {
      nombre: 'Tango Nube',
      imagen: 'assets/TangoSoftware-Productos/png/TangoNube_v2.png',
      descripcion: 'Solución cloud para pequeñas empresas y emprendedores, desarrollada para administrar tu negocio de forma simple.',
      bgColor: '#607d8a',
      btnClass: 'bg-white text-gray-700 hover:bg-gray-100'
    }
  ];

  get maxIndex(): number {
    return Math.max(0, this.productos.length - this.itemsPerView);
  }

  get dots(): number[] {
    return Array(this.maxIndex + 1).fill(0).map((_, i) => i);
  }

  ngOnInit() {
    this.updateItemsPerView();
    this.startAutoPlay();
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  @HostListener('window:resize')
  onResize() {
    this.updateItemsPerView();
    // Ajustar currentIndex si es necesario
    if (this.currentIndex > this.maxIndex) {
      this.currentIndex = this.maxIndex;
    }
  }

  updateItemsPerView() {
    const width = window.innerWidth;
    if (width < 640) {
      this.itemsPerView = 1;
    } else if (width < 1024) {
      this.itemsPerView = 2;
    } else {
      this.itemsPerView = 3;
    }
  }

  nextSlide() {
    if (this.currentIndex < this.maxIndex) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
    this.restartAutoPlay();
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.maxIndex;
    }
    this.restartAutoPlay();
  }

  goToSlide(index: number) {
    this.currentIndex = index;
    this.restartAutoPlay();
  }

  startAutoPlay() {
    this.autoPlayInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }

  restartAutoPlay() {
    this.stopAutoPlay();
    this.startAutoPlay();
  }
}
