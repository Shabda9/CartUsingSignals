import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  quantity = signal(1);

  qtyAvailable = signal([1, 2, 3, 4, 5, 6]);

  selectedVehicle = signal<Vehicle>({
    id: 1,
    name: 'AT-AT',
    price: 19416.13
  });

  vehicles = signal<Vehicle[]>([]);

  totalPrice = computed(() => this.selectedVehicle().price * this.quantity());

  color = computed(() => this.totalPrice() > 50000 ? 'green' : 'blue');

  onQuantitySelected(qty: number) {
    this.quantity.set(qty);
  }
}

export interface Vehicle {
  id: number;
  name: string;
  price: number;
}
