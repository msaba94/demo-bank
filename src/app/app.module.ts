import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './home/home.component';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { StatementComponent } from './statement/statement.component';
import { HeaderComponent } from './header/header.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AccountComponent } from './account/account.component';
import { CreateFdComponent } from './create-fd/create-fd.component';
import { MatSelectModule } from '@angular/material/select';
import { PayBillComponent } from './pay-bill/pay-bill.component';
import { service } from './service';
import { LoginComponent } from './login/login.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StatementComponent,
    HeaderComponent,
    AccountComponent,
    CreateFdComponent,
    PayBillComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule, MatGridListModule, MatButtonModule, MatTooltipModule, MatTableModule,
     MatFormFieldModule, MatSelectModule,MatInputModule, FormsModule, ReactiveFormsModule,MatTabsModule,HttpClientModule
  ],
  providers: [service, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
