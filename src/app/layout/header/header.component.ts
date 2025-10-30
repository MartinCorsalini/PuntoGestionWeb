import { Component, OnInit, Inject, PLATFORM_ID, HostListener } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private isBrowser: boolean;
  isDarkTheme: boolean = true; // Por defecto oscuro
  isMenuOpen: boolean = false; // Estado del menú móvil
  isScrolled: boolean = false; // Detectar scroll

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      // Cargar el tema guardado al iniciar
      const savedTheme = localStorage.getItem('theme') || 'dark';
      this.isDarkTheme = savedTheme === 'dark';
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
  }

  /**
   * Cambia el tema entre claro y oscuro
   */
  toggleTheme(event: Event): void {
    if (!this.isBrowser) return;

    const checkbox = event.target as HTMLInputElement;
    const theme = checkbox.checked ? 'light' : 'dark';
    this.isDarkTheme = theme === 'dark';

    // Aplicar el tema con transición suave
    document.documentElement.setAttribute('data-theme', theme);

    // Guardar en localStorage
    localStorage.setItem('theme', theme);

    // Opcional: Agregar efecto visual
    this.addThemeTransition();
  }

  /**
   * Abre/cierra el menú móvil
   */
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;

    if (this.isBrowser) {
      // Prevenir scroll cuando el menú está abierto
      if (this.isMenuOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }
  }

  /**
   * Cierra el menú móvil
   */
  closeMenu(): void {
    this.isMenuOpen = false;
    if (this.isBrowser) {
      document.body.style.overflow = '';
    }
  }

  /**
   * Detecta el scroll para agregar efectos al navbar
   */
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    if (this.isBrowser) {
      this.isScrolled = window.scrollY > 50;
    }
  }

  /**
   * Cierra el menú al hacer click fuera
   */
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const clickedInside = target.closest('.dropdown');

    if (!clickedInside && this.isMenuOpen) {
      this.closeMenu();
    }
  }

  /**
   * Cierra el menú al presionar Escape
   */
  @HostListener('document:keydown.escape', ['$event'])
  onEscapeKey(event: KeyboardEvent): void {
    if (this.isMenuOpen) {
      this.closeMenu();
    }
  }

  /**
   * Navega a una sección específica
   */
  navigateToSection(sectionId: string): void {
    this.closeMenu();

    if (this.isBrowser) {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 70; // Altura del navbar
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  }

  /**
   * Abre el enlace de soporte
   */
  openSupport(): void {
    // Aquí puedes abrir un modal, redirigir a otra página, etc.
    console.log('Abriendo soporte...');
    // Ejemplo: window.open('https://soporte.punto-gestion.com', '_blank');
  }

  /**
   * Abre el enlace "En Directo"
   */
  openLiveLink(): void {
    // Aquí puedes abrir un enlace de streaming, webinar, etc.
    console.log('Abriendo enlace en directo...');
    // Ejemplo: window.open('https://live.punto-gestion.com', '_blank');
  }

  /**
   * Efecto de transición suave al cambiar tema
   */
  private addThemeTransition(): void {
    if (!this.isBrowser) return;

    const root = document.documentElement;
    root.style.transition = 'background-color 0.3s ease, color 0.3s ease';

    setTimeout(() => {
      root.style.transition = '';
    }, 300);
  }

  /**
   * Obtiene las clases del navbar según el estado
   */
  getNavbarClasses(): string {
    const classes = ['navbar'];

    if (this.isScrolled) {
      classes.push('navbar-scrolled');
    }

    return classes.join(' ');
  }

  /**
   * Verifica si estamos en una ruta específica
   */
  isActiveRoute(route: string): boolean {
    if (!this.isBrowser) return false;
    return window.location.pathname === route;
  }
}
