import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StatementComponent } from './statement/statement.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent
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
