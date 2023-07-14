import { Component } from '@angular/core';
import { filter, fromEvent, take } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'IGREJAPLENITUDE FUNCHAL';


  ngOnInit() {
    this.loadScript();
  }

  loadScript(): void {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${environment.GOOGLE_PLACE_KEY}&libraries=places`;
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
