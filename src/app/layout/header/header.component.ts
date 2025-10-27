import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
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

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      // Cargar el tema guardado al iniciar
      const savedTheme = localStorage.getItem('theme') || 'light';
      document.documentElement.setAttribute('data-theme', savedTheme);
      
      // Sincronizar el estado del checkbox
      const checkbox = document.querySelector('.theme-controller') as HTMLInputElement;
      if (checkbox) {
        checkbox.checked = savedTheme === 'dark';
      }
    }
  }

  toggleTheme(event: Event): void {
    if (!this.isBrowser) return;

    const checkbox = event.target as HTMLInputElement;
    const theme = checkbox.checked ? 'dark' : 'light';
    
    // Aplicar el tema
    document.documentElement.setAttribute('data-theme', theme);
    
    // Guardar en localStorage
    localStorage.setItem('theme', theme);
  }
}