import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-spinner',
  templateUrl: './product-spinner.component.html',
  styleUrls: ['./product-spinner.component.scss']
})
export class ProductSpinnerComponent implements OnInit {
@Input() isLoading!:boolean
  constructor() { }

  ngOnInit(): void {
  }

}
