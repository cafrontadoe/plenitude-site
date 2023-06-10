import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav | undefined;

  opened: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  clickHandler() {
    this.sidenav?.close();
  }

}