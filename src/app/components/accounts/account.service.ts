import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { BehaviorSubject, Observable } from 'rxjs';
import { Account } from './account.module'
import { Balance } from './balance.module'
import { Transfer } from './transfer.module'

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseUrl = "http://localhost:8080/accounts"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMensage(msg: string, isError: boolean=false ): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success'] 
    })
  }
  create(account: Account): Observable<any> {
    return this.http.post<any>(this.baseUrl, account)
  }
  deposit(deposit: Balance): Observable<any> {
    const url = `${this.baseUrl}/deposit`
    return this.http.post<any>(url, deposit)
  }
  cashout(cashout: Balance): Observable<any> {
    const url = `${this.baseUrl}/cashout`
    return this.http.post<any>(url, cashout)
  }
  transfer(transfer: Transfer): Observable<any> {
    console.log(transfer)
    const url = `${this.baseUrl}/transfer`
    console.log(url)
    return this.http.post<any>(url, transfer)
  }

  listAccounts(): Observable<Account[]>{
    return this.http.get<Account[]>(this.baseUrl)
  }
  getAccountById(accountID: string|null): Observable<Account>{
    const url = `${this.baseUrl}/account?id=${accountID}`
    return this.http.get<Account>(url)
  }
}