import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../models/sale';

@Component({
  selector: 'app-sale-items',
  templateUrl: './sale-items.component.html',
  styleUrls: ['./sale-items.component.css']
})
export class SaleItemsComponent implements OnInit {

  @Input()
  items!: Item[];

  displayedColumns: string[] = ['name', 'price', 'quantity', 'cost', 'tags'];
  displayedColumnsFooter: string[] = ['name', 'price', 'quantity', 'cost', 'tags'];


  constructor() { }

  ngOnInit(): void {
  }

  getTotalCost() {
    return this.items.map(t => t.price * t.quantity).reduce((acc, value) => acc + value, 0);
  }

}
