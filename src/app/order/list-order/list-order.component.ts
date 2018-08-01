import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-order',
  templateUrl: './list-order.component.html',
  styleUrls: ['./list-order.component.css']
})
export class ListOrderComponent implements OnInit {
  res:any;
  orders: any;
  constructor(private orderService: OrderService, private router: Router) { }

  getOrder(): void{
    this.orderService.getOders().subscribe(res => {
      this.res = res
      this.orders = this.res.data.orders
      console.log(this.res)
    })
  }

  delete(id:number){
   this.orderService.deleteOrder(id).subscribe(
     res => {
       this.res = res
       if (this.res.is_success == true){
         this.router.navigate(['orders'])
       }
     }
   )
  }
  ngOnInit() {
    this.getOrder()
  }

}
