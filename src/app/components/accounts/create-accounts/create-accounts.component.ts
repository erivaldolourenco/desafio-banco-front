import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../account.service';
import { Account } from '../account.module'

@Component({
  selector: 'app-create-accounts',
  templateUrl: './create-accounts.component.html',
  styleUrls: ['./create-accounts.component.css']
})
export class CreateAccountsComponent implements OnInit {

  account: Account = {
    name: '',
    cpf: '',
    balance: 0
  }

  constructor(private router: Router, private accoutService: AccountService) { }

  ngOnInit(): void {
  }

  createAccount() {
    this.accoutService.create(this.account).subscribe(
      message => {
        this.accoutService.showMensage(JSON.stringify(message))
        this.router.navigate(['/accounts'])
      },
      (error) => {
        this.accoutService.showMensage(error.error.message,true);
      })

  }
  cancel(): void {
    this.router.navigate(['/accounts'])
  }
}
