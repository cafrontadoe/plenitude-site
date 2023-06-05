import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavBarComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav | undefined;

  opened: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  clickHandler() {
    this.sidenav?.close();
  }

}