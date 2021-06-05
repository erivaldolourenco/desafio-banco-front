import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component'


import { AccountsComponent } from './views/accounts/accounts.component';
import { HomeComponent } from './views/home/home.component';
import { CreateAccountsComponent } from './components/accounts/create-accounts/create-accounts.component';
import { InfoAccountsComponent } from './components/accounts/info-accounts/info-accounts.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar'

import { HttpClientModule } from '@angular/common/http'

import {FormsModule} from '@angular/forms'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input';
import { ListAccountsComponent } from './components/accounts/list-accounts/list-accounts.component'
import { DepositDialogComponent } from './components/accounts/info-accounts/dialog/deposit-dialog/deposit-dialog.component'
import { CashoutDialogComponent } from './components/accounts/info-accounts/dialog/cashout-dialog/cashout-dialog.component'
import { TransferDialogComponent } from './components/accounts/info-accounts/dialog/transfer-dialog/transfer-dialog.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    AccountsComponent, 
    CreateAccountsComponent, 
    InfoAccountsComponent, 
    ListAccountsComponent,
    DepositDialogComponent,
    CashoutDialogComponent,
    TransferDialogComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
