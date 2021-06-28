import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-speakers-page',
  templateUrl: './speakers-page.component.html',
  styleUrls: ['./speakers-page.component.scss']
})
export class SpeakersPageComponent implements OnInit {
  productData: any = [
    { image: '/assets/image-zx9.jpg'},
    { image: '/assets/image-zx7.jpg' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
