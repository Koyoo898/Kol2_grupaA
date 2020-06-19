import { Component, OnInit } from '@angular/core';
import {WNDataService} from "../../service/wn-data.service";


@Component({
  selector: 'orders-wn',
  templateUrl: './orders-wn.component.html',
  styleUrls: ['./orders-wn.component.css']
})
export class OrdersWNComponent implements OnInit {

  public items$: any;
  constructor(private service: WNDataService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.service.getAll().subscribe(response =>{
      this.items$ = response;
    })
  }

}
