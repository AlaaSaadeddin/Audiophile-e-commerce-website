import { Component, OnInit } from '@angular/core';
// import { content } from 'src/app/model/textContentData';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
   textContent : any = {primaryTitle:'NEW PRODUCT',mainTitle:'XXX99 MARK II HEADPHONES',
   description:'Experience natural, life like audio and exceptional build quality made for the passionate music enthusiast.'}
   
  

  constructor() { }

  ngOnInit(): void {
  }

}
