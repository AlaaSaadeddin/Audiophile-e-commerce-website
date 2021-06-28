import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { ProductsCardComponent } from 'src/app/reusable-components/products-card/products-card.component';

@Component({
  selector: 'app-headphones-page',
  templateUrl: './headphones-page.component.html',
  styleUrls: ['./headphones-page.component.scss'],
})
export class HeadphonesPageComponent implements OnInit {
  // @ViewChildren(ProductsCardComponent)
  // myChild: ProductsCardComponent | undefined;

  productData: any = [
    { image: '/assets/image-xx99-mark-two.jpg'},
    { image: '/assets/image-xx99-mark-one.jpg' },
    { image: '/assets/image-xx59.jpg' },
  ];

  constructor() {

  }

  ngOnInit(): void {

  }

  // ngAfterViewInit() {
  //   console.log('hhhhhhhhhhhhhhhhhhhhhhhhhhhhhh');
  //   console.log(this.myChild);
  //   //  let result =   this.myChild;
  //   //  result.primaryTitle = 'hhhhh';
  //   //  console.log(result,'kkkkkkkkkkkk');
  //   //  console.log('object :>> ', result.primaryTitle);
  // }
}
