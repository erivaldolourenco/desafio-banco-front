import { Component, OnInit } from '@angular/core';
import { Account } from '../account.module';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-list-accounts',
  templateUrl: './list-accounts.component.html',
  styleUrls: ['./list-accounts.component.css']
})
export class ListAccountsComponent implements OnInit {

  accounts: Account[] =  []
  displayedColumns: string[] = ['id', 'cpf', 'name','action'];

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.accountService.listAccounts().subscribe(accounts =>{
      this.accounts = accounts
      console.log(this.accounts)
    })
  }

}
