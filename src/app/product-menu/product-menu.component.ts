import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-menu',
  templateUrl: './product-menu.component.html',
  styleUrls: ['./product-menu.component.scss']
})
export class ProductMenuComponent implements OnInit {
  @Input() products: any[] = [];
  @Output() productName = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  onProductChange(event: any): void {
    if (!event) {
      this.productName.emit('')
    } else {
      this.productName.emit(event.target.value)
    }
  }

  onReset(): void {
    this.productName.emit('')
  }

}
