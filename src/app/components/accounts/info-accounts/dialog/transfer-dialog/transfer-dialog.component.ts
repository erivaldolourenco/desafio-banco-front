import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AccountService } from '../../../account.service'
import { Router } from '@angular/router';
import { Transfer } from '../../../transfer.module'

@Component({
  selector: 'app-transfer-dialog',
  templateUrl: './transfer-dialog.component.html',
  styleUrls: ['./transfer-dialog.component.css']
})
export class TransferDialogComponent implements OnInit {

  transfer: Transfer = {
    depositorID: 0,
    beneficiaryID: 0,
    value: 0
  }


  constructor(
    public dialogRef: MatDialogRef<TransferDialogComponent>,
    private accoutService: AccountService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  doTransfer(): void {
    this.accoutService.transfer(this.transfer).subscribe(
      (message) => {
        this.accoutService.showMensage(JSON.stringify(message))
        const url = `/accounts/info/${this.transfer.depositorID}`
        this.router.navigate([url])
        this.dialogRef.close();
      },
      (error) => {
        this.accoutService.showMensage(error.error.message,true);
      }
    )
  }

  cancel(): void{
    this.dialogRef.close();
  }
}
