import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  slideIndex = 0;

  ngOnInit(): void {
    this.showSlides();
  }
  
  showSlides() {
    const slides: HTMLCollectionOf<Element> = document.getElementsByClassName('mySlides');
    const dots: HTMLCollectionOf<Element> = document.getElementsByClassName('dot');
  
    for (let i = 0; i < slides.length; i++) {
      (slides[i] as HTMLElement).style.display = 'none';
    }
  
    this.slideIndex++;
    if (this.slideIndex > slides.length) {
      this.slideIndex = 1;
    }
  
    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove('active');
    }
  
    if (slides[this.slideIndex - 1] && dots[this.slideIndex - 1]) {
      (slides[this.slideIndex - 1] as HTMLElement).style.display = 'block';
      dots[this.slideIndex - 1].classList.add('active');
      setTimeout(() => this.showSlides(), 2500); // Change slide every 2 seconds
    }
  }
  }
