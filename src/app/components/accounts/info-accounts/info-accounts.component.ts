import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from '../account.module';
import { AccountService } from '../account.service';
import { CashoutDialogComponent } from './dialog/cashout-dialog/cashout-dialog.component';
import { DepositDialogComponent } from './dialog/deposit-dialog/deposit-dialog.component';
import { TransferDialogComponent } from './dialog/transfer-dialog/transfer-dialog.component';

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

  constructor(
    private accountService: AccountService,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.accountService.getAccountById(id).subscribe(account => {
      this.account = account
      console.log(this.account)
    })
  }

  openDeposit(): void {
    const dialogRef = this.dialog.open(DepositDialogComponent, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


  openCashout(): void {
    const dialogRef = this.dialog.open(CashoutDialogComponent, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  openTransfer(): void {
    const dialogRef = this.dialog.open(TransferDialogComponent, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  goBack(): void {
    this.router.navigate(['/accounts'])
  }
}
