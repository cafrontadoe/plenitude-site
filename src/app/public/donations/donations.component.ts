import { Component } from '@angular/core';
import { DonationService } from '../../shared/services/donation.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-donations',
  templateUrl: './donations.component.html',
  styleUrls: ['./donations.component.scss']
})
export class DonationsComponent {
  donationAmount: number = 0;
  fullName: string = '';
  loadingCheckout = false;
  renewTokenTimes = 0;

  constructor(
    private donationService: DonationService,
    private authService: AuthService
    ) { }

  donate() {
    this.loadingCheckout = true;
    this.donationService.checkout()
      .subscribe({
        next: (resp) => {
          window.location.href = resp.url;
        },
        error: (err: any) => {
          if (err.error.error.name === 'TokenExpiredError' && this.renewTokenTimes === 0) {
            this.callRenewToken();
          } else if(err.error.error.name === 'TokenExpiredError') {
            alert('recarregue a página e tente novamente');
            this.loadingCheckout = false;
          } else {
            this.loadingCheckout = false;
          }
        }
      });
  }

  callRenewToken() {
    this.renewTokenTimes = this.renewTokenTimes++;
    this.loginBackend();
   
  }

  loginBackend() {
    this.authService.login().subscribe({
      next: (response: any) => {
        localStorage.setItem('jwt', response.token);
        this.donate();
      },
      error: (error) => {
        console.error('Login failed:');
      }
    });
  }

}
