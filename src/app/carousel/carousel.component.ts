import { Component, Input, OnInit } from '@angular/core';
import { imageData } from './image-data';

interface carouselImage {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  constructor() {}

  images = imageData;
  @Input() indicators = true;
  @Input() controls = true;
  @Input() autoSlide = false;
  @Input() slideInterval = 3000;
  selectedIndex = 0;

  ngOnInit(): void {
    if (this.autoSlide) {
      this.autoSlideImages;
    }
  }

  autoSlideImages = setInterval(() => {
    if (this.selectedIndex === this.images.length - 1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
  }, this.slideInterval);

  selectedImage(index: number) {
    this.selectedIndex = index;
  }

  onPrevClick() {
    if (this.selectedIndex === 0) {
      this.selectedIndex = this.images.length - 1;
    } else {
      this.selectedIndex--;
    }
    clearInterval(this.autoSlideImages);
    this.autoSlideImages = setInterval(() => {
      this.checkMaxIndex();
    }, this.slideInterval);
  }

  onNextClick() {
    this.checkMaxIndex();
    clearInterval(this.autoSlideImages);
    this.autoSlideImages = setInterval(() => {
      this.checkMaxIndex();
    }, this.slideInterval);
  }
  checkMaxIndex() {
    if (this.selectedIndex === this.images.length - 1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
  }
}
