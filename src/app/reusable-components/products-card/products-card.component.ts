import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-card',
  templateUrl: './products-card.component.html',
  styleUrls: ['./products-card.component.scss'],
})
export class ProductsCardComponent implements OnInit {
  @Input() productData: any;

  textContent: any = 
    {
      primaryTitle: 'NEW PRODUCT',
      mainTitle: 'XX99 MARK II HEADPHONES',
      description:
        'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
    }


  constructor() {}

  ngOnInit(): void {}
}
