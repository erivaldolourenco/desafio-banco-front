import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-cashout-dialog',
  templateUrl: './cashout-dialog.component.html',
  styleUrls: ['./cashout-dialog.component.css']
})
export class CashoutDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CashoutDialogComponent>
  ) { }

  ngOnInit(): void {
  }

}
