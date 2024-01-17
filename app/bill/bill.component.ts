import { Component, OnInit } from '@angular/core';
import { BillService } from '../service/bill.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {

  public products:any=[];
  public grandTotal !:number;

  constructor(private billService:BillService){}

  ngOnInit(): void {
    this.billService.getItem()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.billService.getTotalPrice();
    })
  }
 

  // ngOnInit(): void {
  //   this.billService.getItem().subscribe(res=>{
  //     this.product=res;
  //     this.grandTotal=this.billService.getTotalPrice();
  //   });
  // }

  emptyBill(){
    this.billService.removeAllItems()
  }


}
