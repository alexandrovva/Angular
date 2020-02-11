import { Component } from '@angular/core';

import { items } from '../items';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  items = items;

  share() {
    window.alert('The product has been shared!');
  }
}