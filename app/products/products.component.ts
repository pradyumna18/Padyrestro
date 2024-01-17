import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { BillService } from '../service/bill.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  public productsList:any=[];
  public filterCategory:any;
  searchKey:string='';
  constructor(private api:ApiService,private billService:BillService){  }

  ngOnInit(): void {
    this.api.getProducts().subscribe(res=>{
      this.productsList=res;
      this.filterCategory=res;
      this.productsList.forEach((a:any) => {
        if(a.category==="hotel"){
          a.category="hotel"
        }
        Object.assign(a,{quantity:1,total:a.price });
      });
      console.log(this.productsList);
      
    });
    this.billService.search.subscribe((val:any)=>{
      this.searchKey=val;
    })
  }

  addItem(item:any){
      this.billService.addItem(item);
  }

  filter(category:string){
    this.filterCategory=this.productsList.filter((a:any)=>{
      if(a.category==category || category==''){
        return a;
      }
    })
  }
}
