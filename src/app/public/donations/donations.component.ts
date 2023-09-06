import { Component } from '@angular/core';
import { DonationService } from '../../shared/services/donation.service';

@Component({
  selector: 'app-donations',
  templateUrl: './donations.component.html',
  styleUrls: ['./donations.component.scss']
})
export class DonationsComponent {
  donationAmount: number = 0;
  fullName: string = '';
  loadingCheckout = false;

  constructor(private donationService: DonationService) { }

  donate() {
    this.loadingCheckout = true;
    this.donationService.checkout()
      .subscribe({
        next: (resp) => {
          window.location.href = resp.url;
        },
        error: () => {
          this.loadingCheckout = false;
        }
      });
  }

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
