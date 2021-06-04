import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Observable } from 'rxjs';
import { Account } from './account.module'

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
  create(account: Account): Observable<Text> {
    return this.http.post<Text>(this.baseUrl, account)
  }

  listAccounts(): Observable<Account[]>{
    return this.http.get<Account[]>(this.baseUrl)
  }
  getAccountById(accountID: string|null): Observable<Account>{
    const url = `${this.baseUrl}/account?id=${accountID}`
    return this.http.get<Account>(url)
  }
}