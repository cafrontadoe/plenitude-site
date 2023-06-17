import { AfterViewInit, Component, OnInit } from '@angular/core';

declare const google: any;

@Component({
  selector: 'app-testimony',
  templateUrl: './testimony.component.html',
  styleUrls: ['./testimony.component.scss']
})
export class TestimonyComponent implements OnInit, AfterViewInit {
  placeId = 'ChIJX5qshlphYAwRaOTvfq48S1A';


  service: any;
  public reviews: Array<any> = [];

  constructor() { }

  ngOnInit() {
   
  }

  ngAfterViewInit(): void {
    const request = {
      placeId: this.placeId,
      fields: ['reviews']
    };
    this.service = new google.maps.places.PlacesService(document.getElementById('googleReviews'));

    this.service.getDetails(request, this.callback);
  }

  public callback = (place: any, status: any) => {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      this.reviews = place.reviews.slice();
    }
  };

  createRange(number: any) {
    const items: number[] = [];
    for (let i = 1; i <= number; i++) {
      items.push(i);
    }
    return items;
  }

}