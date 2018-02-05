import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  private products:Product[];

  constructor() { }

  ngOnInit() {
    this.products =[
      new Product(10,'布娃娃','美国原装进口的布娃娃',3),
      new Product(10,'布娃娃','美国原装进口的布娃娃',3),
      new Product(10,'布娃娃','美国原装进口的布娃娃',3),
      new Product(10,'布娃娃','美国原装进口的布娃娃',3)
    ] 
  }

}

export class Product {
  constructor(
    public price: number,
    public title: string,
    public desc: string,
    public rating: number
  ){

  }
}
