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
  
  }

  ngOnInit() {
    this.loadScript();
    this.loginBackend();
  }

  loginBackend() {
    this.authService.login().subscribe({
      next: (response) => {
        // Handle the successful response here
        console.log('Login successful:', response);
      },
      error: (error) => {
        // Handle errors here
        console.error('Login failed:', error);
      },
      complete: () => {
        // This part is optional and can be omitted if not needed
        console.log('Login completed');
      }
    });
    
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
