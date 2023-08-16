import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { PlacesService } from 'src/app/shared/services/places.service';
import { tap, catchError } from 'rxjs/operators';




@Component({
  selector: 'app-testimony',
  templateUrl: './testimony.component.html',
  styleUrls: ['./testimony.component.scss']
})
export class TestimonyComponent implements OnInit, AfterViewInit {
  @ViewChild('googleReviewContainer') googleReviewContainer: any;

  service: any;
  public reviews: Array<any> = [];
  site = import.meta.env['NG_APP_PLACE_ID'];

  constructor(private placesService: PlacesService) { 
  }

  ngOnInit() {
   
  }

  ngAfterViewInit(): void {
    this.getPlaceReviews();
  }

  getPlaceReviews(): void {
    console.log(this.googleReviewContainer.nativeElement);
    this.placesService = new PlacesService();

    this.placesService.getPlaceDetails(this.site, this.googleReviewContainer.nativeElement)
      .pipe(
        tap((reviews: any[]) => {
          this.reviews = reviews;
        }),
        catchError((error) => {
          console.error('Error:', error);
          throw error; // Re-throw the error to propagate it to the error handler
        })
      )
      .subscribe();
  }

  createRange(number: any) {
    const items: number[] = [];
    for (let i = 1; i <= number; i++) {
      items.push(i);
    }
    return items;
  }

}