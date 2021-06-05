import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Balance } from '../../../balance.module'
import { AccountService } from '../../../account.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-deposit-dialog',
  templateUrl: './deposit-dialog.component.html',
  styleUrls: ['./deposit-dialog.component.css']
})
export class DepositDialogComponent implements OnInit {

  deposit: Balance = {
    accountId: 0,
    value: 0
  }

  constructor(
    public dialogRef: MatDialogRef<DepositDialogComponent>,
    private accoutService: AccountService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  doDeposit(): void {
    this.accoutService.deposit(this.deposit).subscribe(
      (message) => {

        this.accoutService.showMensage(JSON.stringify(message))
        const url = `/accounts/info/${this.deposit.accountId}`
        this.router.navigate([url])
        this.dialogRef.close();
      },
      (error) => {
        this.accoutService.showMensage(error.error.message, true);
      }
    )
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
