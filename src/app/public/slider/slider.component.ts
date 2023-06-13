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
    let i;
    let slides: any = document.getElementsByClassName('mySlides');
    let dots = document.getElementsByClassName('dot');
    for (i = 0; i < slides?.length; i++) {
      slides[i].style.display = 'none';
    }
    this.slideIndex++;
    if (this.slideIndex > slides.length) {
      this.slideIndex = 1;
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
    }
    if (slides[this.slideIndex - 1] && dots[this.slideIndex - 1]) {
      slides[this.slideIndex - 1].style.display = 'block';
      dots[this.slideIndex - 1].className += ' active';
      setTimeout(() => this.showSlides(), 2500); // Change image every 2 seconds
    }
  }
}
