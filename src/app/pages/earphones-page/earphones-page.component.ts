import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-earphones-page',
  templateUrl: './earphones-page.component.html',
  styleUrls: ['./earphones-page.component.scss']
})
export class EarphonesPageComponent implements OnInit {
  productData: any = [
    { image: '/assets/image-yx1-earphones.jpg'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
