import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent {
  @Input() images = [
    { src: './assets/images/photo_slide_1.jpg', alt: 'Slide1' },
    { src: './assets/images/photo_slide_2.jpg', alt: 'Slide2' },
    { src: './assets/images/photo_slide_3.jpg', alt: 'Slide3' },
  ];

  showSlider = true;

  currentIndex = 0;
  prevArrowIconPath = './assets/icons/icons.svg#icon-arrows_prev';
  nextArrowIconPath = './assets/icons/icons.svg#icon-arrows_next';

  isAnimating = false;

  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  nextSlide() {
    this.currentIndex =
      (this.currentIndex + 1 + this.images.length) % this.images.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }
}
