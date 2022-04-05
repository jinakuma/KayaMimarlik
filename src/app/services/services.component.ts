import { Component, OnInit } from '@angular/core';
import { services } from './services-data';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor() { }
  services = services;
  ngOnInit(): void {
  }

}
