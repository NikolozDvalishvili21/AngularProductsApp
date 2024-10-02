import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../product.model';
import { ProductRowComponent } from '../product-row/product-row.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductRowComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Product[] = [
    { sku: 'MYSHOES', name: 'Black AF1 Nike', imageUrl: 'https://via.placeholder.com/150', department: ['Men', 'Shoes'], price: 109.99 },
    { sku: 'NEATOJACKET', name: 'Blue GAP Jacket', imageUrl: 'https://via.placeholder.com/150', department: ['Women', 'Apparel'], price: 238.99 },
    { sku: 'NICEHAT', name: 'Mercedes F1 Black Hat', imageUrl: 'https://via.placeholder.com/150', department: ['Men', 'Accessories'], price: 29.99 },
    { sku: 'SPORTHAT', name: 'Real Madrid White Hat', imageUrl: 'https://via.placeholder.com/150', department: ['Men', 'Accessories'], price: 29.99 },
  ];

  constructor() {
    console.log(this.products); 
  }
}
