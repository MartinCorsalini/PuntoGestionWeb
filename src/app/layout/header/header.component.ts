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
  isDarkTheme: boolean = true;
  isMenuOpen: boolean = false;
  isScrolled: boolean = false;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      const savedTheme = localStorage.getItem('theme') || 'dark';
      this.isDarkTheme = savedTheme === 'dark';
      this.applyTheme(savedTheme);
    }
  }

  toggleTheme(event: Event): void {
    if (!this.isBrowser) return;

    const checkbox = event.target as HTMLInputElement;
    const theme = checkbox.checked ? 'light' : 'dark';
    this.isDarkTheme = theme === 'dark';

    this.applyTheme(theme);
    localStorage.setItem('theme', theme);
    this.addThemeTransition();

    window.dispatchEvent(new CustomEvent('theme-changed', { detail: { theme } }));
  }

  private applyTheme(theme: string): void {
    if (!this.isBrowser) return;

    document.documentElement.setAttribute('data-theme', theme);

    if (theme === 'dark') {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
    }
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;

    if (this.isBrowser) {
      if (this.isMenuOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }
  }

  closeMenu(): void {
    this.isMenuOpen = false;
    if (this.isBrowser) {
      document.body.style.overflow = '';
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    if (this.isBrowser) {
      this.isScrolled = window.scrollY > 50;
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const clickedInside = target.closest('.dropdown');

    if (!clickedInside && this.isMenuOpen) {
      this.closeMenu();
    }
  }

  @HostListener('document:keydown.escape', ['$event'])
  onEscapeKey(event: KeyboardEvent): void {
    if (this.isMenuOpen) {
      this.closeMenu();
    }
  }

  navigateToSection(sectionId: string): void {
    this.closeMenu();

    if (this.isBrowser) {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 70;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  }

  openEnDirecto(): void {
    if (this.isBrowser) {
      window.open('https://www.axoft.com/tango/tango-en-directo/', '_blank');
    }
  }

  private addThemeTransition(): void {
    if (!this.isBrowser) return;

    const root = document.documentElement;
    root.style.transition = 'background-color 0.3s ease, color 0.3s ease';

    setTimeout(() => {
      root.style.transition = '';
    }, 300);
  }

  getNavbarClasses(): string {
    const classes = ['navbar'];

    if (this.isScrolled) {
      classes.push('navbar-scrolled');
    }

    return classes.join(' ');
  }

  isActiveRoute(route: string): boolean {
    if (!this.isBrowser) return false;
    return window.location.pathname === route;
  }
}
