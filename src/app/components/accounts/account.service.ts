import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Observable } from 'rxjs';
import { Account } from './account.module'
import { Balance } from './balance.module'
import { Transfer } from './transfer.module'

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseUrl = "http://localhost:8080/accounts"



  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMensage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }
  create(account: Account): Observable<JSON> {
    return this.http.post<JSON>(this.baseUrl, account)
  }
  deposit(deposit: Balance): Observable<Text> {
    const url = `${this.baseUrl}/deposit`
    return this.http.post<Text>(url, deposit)
  }
  cashout(cashout: Balance): Observable<Text> {
    const url = `${this.baseUrl}/cashout`
    return this.http.post<Text>(url, cashout)
  }
  transfer(transfer: Transfer): Observable<Text> {
    const url = `${this.baseUrl}/transfer`
    return this.http.post<Text>(this.baseUrl, transfer)
  }

  listAccounts(): Observable<Account[]>{
    return this.http.get<Account[]>(this.baseUrl)
  }
  getAccountById(accountID: string|null): Observable<Account>{
    const url = `${this.baseUrl}/account?id=${accountID}`
    return this.http.get<Account>(url)
  }
}