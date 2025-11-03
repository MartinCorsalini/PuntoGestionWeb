import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { CommonModule, isPlatformBrowser } from '@angular/common';

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
  isDarkTheme: boolean = true;
  certificadoLogo: string = 'assets/Insignias/TS-Dist-Certificado_light.svg';
  private isBrowser: boolean;
  private themeObserver?: MutationObserver;

  // Array para controlar qué cards están volteadas
  flippedCards: boolean[] = [];

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  productos: Producto[] = [
    {
      nombre: 'Tango Gestión',
      imagen: 'assets/TangoSoftware-Productos/svg/1.TangoGestion.svg',
      descripcion: 'Software para PyMEs y grandes empresas, desarrollado para lograr el mejor resultado de la manera más fácil en el menor tiempo posible.',
      bgColor: '#2fa7df',
      btnClass: 'bg-white text-blue-600 hover:bg-gray-100'
    },
    {
      nombre: 'Tango Punto de Venta',
      imagen: 'assets/TangoSoftware-Productos/svg/2.TangoPDV.svg',
      descripcion: 'Software para comercios minoristas, sucursales y/o franquicias. Es fácil de usar y cuenta con permisos y controles que le dan una total seguridad.',
      bgColor: '#2fa7df',
      btnClass: 'bg-white text-blue-600 hover:bg-gray-100'
    },
    {
      nombre: 'Tango Capital Humano',
      imagen: 'assets/TangoSoftware-Productos/svg/1.TangoGestion.svg',
      descripcion: 'Software para Recursos Humanos, desarrollado para automatizar y mejorar cada etapa de la administración del personal, obteniendo los mejores resultados de manera sencilla y rápida.',
      bgColor: '#2fa7df',
      btnClass: 'bg-white text-blue-600 hover:bg-gray-100'
    },
    {
      nombre: 'Tango Estudios Contables',
      imagen: 'assets/TangoSoftware-Productos/svg/4.TangoEECC.svg',
      descripcion: 'Software para estudios contables desarrollado para facilitar y potenciar el trabajo del contador cualquiera sea el tamaño de su empresa cliente.',
      bgColor: '#f47d30',
      btnClass: 'bg-white text-orange-600 hover:bg-gray-100'
    },
    {
      nombre: 'Tango Restó',
      imagen: 'assets/TangoSoftware-Productos/svg/5.TangoResto.svg',
      descripcion: 'Software gastronómico que se adapta a todos los tamaños de negocios y permite una gestión integrada en todos los formatos.',
      bgColor: '#e51937',
      btnClass: 'bg-white text-red-600 hover:bg-gray-100'
    },
    {
      nombre: 'Tango Nube',
      imagen: 'assets/TangoSoftware-Productos/svg/6.TangoNube.svg',
      descripcion: 'Solución cloud para pequeñas empresas y emprendedores, desarrollada para administrar tu negocio de forma simple.',
      bgColor: '#607d8a',
      btnClass: 'bg-white text-gray-700 hover:bg-gray-100'
    }
  ];

  ngOnInit() {
    // Inicializar el array de cards volteadas (todas en false)
    this.flippedCards = new Array(this.productos.length).fill(false);

    if (this.isBrowser) {
      // Detectar tema inicial
      this.updateTheme();

      // Observar cambios en el atributo data-theme del HTML
      this.themeObserver = new MutationObserver(() => {
        this.updateTheme();
      });

      this.themeObserver.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['data-theme']
      });
    }
  }

  ngOnDestroy() {
    if (this.themeObserver) {
      this.themeObserver.disconnect();
    }
  }

  updateTheme() {
    if (!this.isBrowser) return;

    const currentTheme = document.documentElement.getAttribute('data-theme');
    this.isDarkTheme = currentTheme === 'dark';

    // Cambiar el logo según el tema
    this.certificadoLogo = this.isDarkTheme
      ? 'assets/Insignias/TS-Dist-Certificado_light.svg'
      : 'assets/Insignias/TS-Dist-Certificado_dark.svg';
  }

  /**
   * Voltea una card específica
   */
  flipCard(index: number) {
    this.flippedCards[index] = !this.flippedCards[index];
  }

  /**
   * Maneja el click en el botón "Ver más"
   */
  verMas(event: Event, producto: Producto) {
    // Prevenir que el click en el botón voltee la card
    event.stopPropagation();

    console.log('Ver más:', producto.nombre);
    // Aquí puedes agregar la lógica para navegar a otra página, abrir un modal, etc.
    // Ejemplo: this.router.navigate(['/producto', producto.nombre]);
  }
}
