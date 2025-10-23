import { Component } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  imports: [],
  templateUrl: './carrusel.component.html',
  styleUrl: './carrusel.component.css'
})
export class CarruselComponent {
  currentSlide = 0;
  totalSlides = 3;

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
    this.scrollToSlide();
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
    this.scrollToSlide();
  }

  private scrollToSlide() {
    const element = document.getElementById(`slide${this.currentSlide + 1}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    }
  }
}
