import { Component, OnInit } from '@angular/core';
import { BillService } from '../service/bill.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  public searchItem:string='';
  public totalItem!:string;

  constructor(private billService:BillService){}

  ngOnInit(): void {
    this.billService.getItem().subscribe(res=>{
      this.totalItem=res.length;
    })
  }
  search(event:any){
    this.searchItem=(event.target as HTMLInputElement).value;
    console.log(this.searchItem);
    this.billService.search.next(this.searchItem);
  }
}
