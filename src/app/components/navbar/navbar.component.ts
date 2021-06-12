import { Component, OnInit } from '@angular/core';
import { product } from '../model/productCardData';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  productCard = [{primaryTitle:'NEW PRODUCT',mainTitle:'XXX99 MARK II  HEADPHONES',
  description:'Experience natural, life like audio and exceptional build quality made for the passionate music enthusiast.',
    buttonText:'SEE PRODUCT'}];

  constructor() { }

  ngOnInit(): void {
  
  }

}
