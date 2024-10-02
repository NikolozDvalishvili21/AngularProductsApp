import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-row',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.css'],
})
export class ProductRowComponent {
  @Input() product!: Product; // Use non-null assertion to indicate it will be provided

  ngOnInit() {
    console.log('Product received:', this.product); // Log the received product
  }
}
