import { Component } from '@angular/core';

@Component({
  selector: 'app-ecommerce',
  imports: [],
  templateUrl: './ecommerce.html',
  styleUrl: './ecommerce.css',
})
export class Ecommerce {
  eccomerceData: any = [];
  categoryvalue: any = [];
  constructor() {
    this.getEcommercedata();
    console.log(this.eccomerceData);
    let category = this.eccomerceData[0].category;
    console.log(category);
  }
  getEcommercedata() {
    this.eccomerceData = [
      {
        id: 101,
        name: 'Wireless Bluetooth Headphones',
        price: 1999,
        category: 'Electronics',
        rating: 4.5,
        stock: 25,
        imageUrl: 'https://picsum.photos/id/201/200/200',
      },
      {
        id: 102,
        name: 'Women Casual Sneakers',
        price: 1499,
        category: 'Footwear',
        rating: 4.2,
        stock: 40,
        imageUrl: 'https://picsum.photos/id/202/200/200',
      },
      {
        id: 103,
        name: 'Smart Watch',
        price: 2999,
        category: 'Electronics',
        rating: 4.7,
        stock: 15,
        imageUrl: 'https://picsum.photos/id/203/200/200',
      },
      {
        id: 104,
        name: '',
        price: 899,
        category: 'Accessories',
        rating: 3.9,
        stock: 0,
        imageUrl: 'https://picsum.photos/id/204/200/200',
      },
      {
        id: 105,
        name: 'Backpack',
        price: 1199,
        category: 'Bags',
        rating: 4.3,
        stock: 60,
        imageUrl: 'https://picsum.photos/id/205/200/200',
      },
    ];
  }
}
