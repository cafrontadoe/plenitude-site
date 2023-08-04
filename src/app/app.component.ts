import { Component } from '@angular/core';
import { filter, fromEvent, take } from 'rxjs';
import { AuthService } from './shared/services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'IGREJA PLENITUDE FUNCHAL';

  constructor(private authService: AuthService) {
    this.loginApp();
  }

  loginApp() {
    const  privateMessage = import.meta.env['NG_APP_PRIVATE_MESSAGE'];
    this.authService.login(privateMessage).subscribe({
      next: response => {
        console.log('POST Response:', response);
      },
      error: error => {
        console.error('POST Error:', error);
      }
    });

  }

  ngOnInit() {
    this.loadScript();
  }

  loadScript(): void {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${import.meta.env['NG_APP_GOOGLE_PLACE_KEY']}&libraries=places`;
    script.async = true;
    script.defer = true;
  
    document.body.appendChild(script);
  
    const scriptLoaded$ = fromEvent(script, 'load').pipe(
      filter(() => (window as any).google && (window as any).google.maps),
      take(1)
    );
  
    scriptLoaded$.subscribe(() => {
    });
  }
  
}
