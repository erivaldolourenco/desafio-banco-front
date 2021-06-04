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
  
  createAccount(){
    this.accoutService.create(this.account).subscribe(()=>{

      this.accoutService.showMensage('Conta cadastrada')
      this.router.navigate(['/accounts'])
    })
    
  }
  cancel(): void{
    this.router.navigate(['/accounts'])
  }
}
