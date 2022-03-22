import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
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
}
