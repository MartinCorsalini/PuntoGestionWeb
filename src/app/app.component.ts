import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./layout/header/header.component";
import { FooterComponent } from "./layout/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pgweb';
  @HostListener('window:scroll', [])
  onScroll() {
    const scrollPosition = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = scrollPosition / docHeight;

    const background = document.querySelector('.scroll-gradient') as HTMLElement;
    if (background) {
      background.style.backgroundPosition = `center ${scrollPercent * 100}%`;
    }
  }
}
