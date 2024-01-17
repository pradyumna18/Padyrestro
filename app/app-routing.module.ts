import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { BillComponent } from './bill/bill.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path:'',redirectTo:'products',pathMatch:'full'
  },
  {
     path:'products',component:ProductsComponent
  },
   {
    path:'bills',component:BillComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
