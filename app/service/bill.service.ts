import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillService {
  public billList:any=[];
  public productList=new BehaviorSubject<any>([]);
  public search = new  BehaviorSubject<string>("");
  constructor() { }

  getItem(){
    return this.productList.asObservable();
  }

  setItem(product:any){
     this.billList.push(...product);
     this.productList.next(product);
  }
  
  addItem(product:any){
    this.billList.push(product);
    this.productList.next(this.billList);
    this.getTotalPrice();
    console.log(this.billList);
    
  }

  getTotalPrice() : number{
    let grandTotal = 0;
    this.billList.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal;
  }
  // getTotalPrice() :number{
  //   let grandTotal=0;
  //   this.billList.map((a:any)=>{
  //     grandTotal += a.total;
  //   })
  //   return grandTotal;
  // }
  removeAllItems(){
    this.billList=[];
    this.productList.next(this.billList);
  }
}
