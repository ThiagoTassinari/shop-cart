import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private data = [
    {
      category: 'Pizza',
      expanded: true,
      products: [
        {id: 0, name: 'Salami', price: '8' },
        {id: 1, name: 'Classic', price: '5' },
        {id: 2, name: 'Bahiana', price: '2' },
        {id: 3, name: 'Calabresa', price: '10' },
      ]
    },
    {
      category: 'Pasta',
      products: [
        {id: 4, name: 'Bolonhesa', price: '11' },
        {id: 5, name: 'Queijo', price: '3' },
        {id: 6, name: 'Calabresa', price: '7' },
      ]
    },
    {
      category: 'Salad',
      products: [
        {id: 7, name: 'Comum', price: '4' },
        {id: 8, name: 'Caeser', price: '6' },
        {id: 9, name: 'Sensacional', price: '5' },
        {id: 10, name: 'Premium', price: '2' },
      ]
    }
  ];

  private cart = [];

  constructor() { }

  getProducts() {
    return this.data;
  }

  getCart() {
    return this.cart;
  }

  addProduct(product) {
    this.cart.push(product);
  }
}
