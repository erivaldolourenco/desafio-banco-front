import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Balance } from '../../../balance.module'
import { AccountService } from '../../../account.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-cashout-dialog',
  templateUrl: './cashout-dialog.component.html',
  styleUrls: ['./cashout-dialog.component.css']
})
export class CashoutDialogComponent implements OnInit {

  cashount: Balance = {
    accountId: 0,
    value: 0
  }

  constructor(
    public dialogRef: MatDialogRef<CashoutDialogComponent>,
    private accoutService: AccountService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  doCashout():void{
    this.accoutService.cashout(this.cashount).subscribe(
      (message) => {
        this.accoutService.showMensage(JSON.stringify(message))
        const url = `/accounts/info/${this.cashount.accountId}`
        this.router.navigate([url])
        this.dialogRef.close();
      },
      (error) => {
        this.accoutService.showMensage(error.error.message,true);
      }
    )
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
