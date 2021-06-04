import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Account } from '../account.module';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-info-accounts',
  templateUrl: './info-accounts.component.html',
  styleUrls: ['./info-accounts.component.css']
})
export class InfoAccountsComponent implements OnInit {

  account: Account = {
    accountId: 0,
    name: '',
    cpf: '',
    balance: 0
  }

  constructor(private accountService: AccountService, private route: ActivatedRoute) { }

  ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id')
      this.accountService.getAccountById(id).subscribe( account => {
        this.account = account
        console.log(this.account)
      })
  }

}
