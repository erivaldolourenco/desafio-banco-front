import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { AccountsComponent } from './views/accounts/accounts.component';
import { CreateAccountsComponent } from './components/accounts/create-accounts/create-accounts.component';
import { InfoAccountsComponent } from './components/accounts/info-accounts/info-accounts.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "accounts",
    component: AccountsComponent
  },
  {
    path: "accounts/create",
    component: CreateAccountsComponent
  },
  {
    path: "accounts/info/:id",
    component: InfoAccountsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
