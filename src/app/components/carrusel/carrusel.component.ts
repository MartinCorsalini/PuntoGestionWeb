import { NgClass, NgForOf } from '@angular/common';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  imports: [NgClass, NgForOf],
  templateUrl: './carrusel.component.html',
  styleUrl: './carrusel.component.css',
})
export class CarruselComponent implements OnInit, OnDestroy {
  slides = [
    { img: 'assets/DELTA5/delta-5.jpeg', alt: 'Imagen carrusel 1' },
    { img: 'assets/DELTA5/delta-5.jpeg', alt: 'Imagen carrusel 2' },
  ];

  slidesMobile = [
    { img: 'assets/DELTA5/delta-5-phone.jpeg', alt: 'Imagen carrusel 1 móvil' },
  ];

  currentSlide = 0;
  isMobile = false;
  autoplayInterval: any; // 👈 ESTA LÍNEA ES CLAVE

  ngOnInit(): void {
    this.checkScreenSize();
    this.startAutoplay();
  }

  ngOnDestroy(): void {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
    }
  }

  @HostListener('window:resize', [])
  onResize(): void {
    this.checkScreenSize();
  }

  checkScreenSize(): void {
    this.isMobile = window.innerWidth < 768;
  }

  get activeSlides() {
    return this.isMobile ? this.slidesMobile : this.slides;
  }

  prevSlide(): void {
    this.currentSlide =
      (this.currentSlide - 1 + this.activeSlides.length) %
      this.activeSlides.length;
    this.restartAutoplay();
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.activeSlides.length;
    this.restartAutoplay();
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
    this.restartAutoplay();
  }

  startAutoplay(): void {
    this.autoplayInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  restartAutoplay(): void {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
    }
    this.startAutoplay();
  }
}
