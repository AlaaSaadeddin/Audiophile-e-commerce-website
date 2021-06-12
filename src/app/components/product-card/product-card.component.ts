import { Component, Input, OnInit } from '@angular/core';
import {product} from '../model/productCardData';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() productCard: product[]=[] ;

  constructor() { }

  ngOnInit(): void {
  }

}
