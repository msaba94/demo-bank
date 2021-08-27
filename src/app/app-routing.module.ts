import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { CreateFdComponent } from './create-fd/create-fd.component';
import { HomeComponent } from './home/home.component';
import { PayBillComponent } from './pay-bill/pay-bill.component';
import { StatementComponent } from './statement/statement.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'account', component: AccountComponent,
  },
  {
    path: 'statement', component: StatementComponent
  },
  {
    path: 'create-fd', component: CreateFdComponent
  },
  {
    path: 'pay-bill', component: PayBillComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
