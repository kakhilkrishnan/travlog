import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'travlog';

  images = [
    '../assets/images/image1.jpg',
    '../assets/images/image2.jpg',
    '../assets/images/image3.jpg',
  ];

  leaders = [
    { name: 'Rajeev Pradeep', photo: '../assets/images/human1.jpg' },
    { name: 'Abey Issac', photo: '../assets/images/human2.jpg' },
    { name: 'Sanyo', photo: '../assets/images/human3.jpg' },
  ];

}
