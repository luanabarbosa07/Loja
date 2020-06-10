import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  share() {
    window.alert('O produto foi compartilhado!');
  }
  onNotify() {
    window.alert('Você será notificado quando o produto for colocado à venda!');
  }
}


/* (pai product-list)
Botão para compartilhamento de produto e botão para notificar o cliente sobre o produto.*/