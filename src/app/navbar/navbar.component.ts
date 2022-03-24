import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  toggle: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  onClick(event: Event) {
    this.toggle = !this.toggle;
  }
}
