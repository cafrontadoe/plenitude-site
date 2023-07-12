import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavBarComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav | undefined;

  envr = environment.production ? 'productin' : 'dev';

  opened: boolean = false;
  public activeTab: any;

  constructor(private router: Router) {
    this.activeTab = "Demo";
    this.router.events.subscribe((event: any) => {

        if (event instanceof NavigationEnd) {
            this.activeTab = event.url;
              console.log(event);
        }


    });
  }

  onSelectTab(newTab: string): void {
    this.activeTab = newTab;
    this.router.navigate([newTab]);
  }

  ngOnInit() {
  }

  clickHandler() {
    this.sidenav?.close();
  }

}