import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'orders-item-wn',
  templateUrl: './orders-item-wn.component.html',
  styleUrls: ['./orders-item-wn.component.css']
})
export class OrdersItemWNComponent implements OnInit {

  @Input() id: number
  @Input() title: string
  @Input() text : string
  @Input() image: string
  @Input() price: string
  constructor() { }


  ngOnInit(): void {
  }

}
