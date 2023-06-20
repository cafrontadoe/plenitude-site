import { Component } from '@angular/core';

@Component({
  selector: 'app-donations',
  templateUrl: './donations.component.html',
  styleUrls: ['./donations.component.scss']
})
export class DonationsComponent {
  donationAmount: number = 0;
  fullName: string = '';

  // constructor(private firebaseService: FirebaseService) {}

  // submitDonation(): void {
  //   this.firebaseService.storeDonation(this.donationAmount, this.fullName)
  //     .then(() => {
  //       console.log('Donation successful');
  //     })
  //     .catch((error) => {
  //       console.error('Error storing donation', error);
  //     });
  // }
}
