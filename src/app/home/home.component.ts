import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  images = [
    {
      imageSrc: 'https://source.unsplash.com/m8Mz6UjaoEo',
      imageAlt: 'img1',
    },
    {
      imageSrc: 'https://source.unsplash.com/FkxmAuYD8ls',
      imageAlt: 'img2',
    },
    {
      imageSrc: 'https://source.unsplash.com/7xed5PqcbIQ',
      imageAlt: 'img3',
    },
  ];
  ngOnInit(): void {
  }

}
