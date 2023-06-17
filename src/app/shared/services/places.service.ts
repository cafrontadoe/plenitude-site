/// <reference types="@types/googlemaps" />
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private placesService: google.maps.places.PlacesService | undefined;

  constructor() {

  }

  getPlaceDetails(placeId: string, container: HTMLDivElement): Observable<any> {
    console.log(container)
    this.placesService = new google.maps.places.PlacesService(container);

    const request = {
      placeId: placeId,
      fields: ['reviews']
    };

    return from(new Promise((resolve, reject) => {
      this.placesService?.getDetails(request, (place, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          resolve(place);
        } else {
          reject(new Error('API request failed'));
        }
      });
    })).pipe(
      map((place: any) => {
        // Filter out profile photos from reviews
        const reviewsWithoutProfilePhotos = place.reviews.map((review: any) => {
          const { profile } = review;
          if (profile && profile.photos && profile.photos.length > 0) {
            const { photos, ...profileWithoutPhotos } = profile;
            return { ...review, profile: profileWithoutPhotos };
          }
          return review;
        });

        return reviewsWithoutProfilePhotos;
      })
    );
  }
}
