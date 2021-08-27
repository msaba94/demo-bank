import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { HomeComponent } from './home/home.component';
import { StatementComponent } from './statement/statement.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'account', component: AccountComponent,
  },
  {
    path: 'statement', component: StatementComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
