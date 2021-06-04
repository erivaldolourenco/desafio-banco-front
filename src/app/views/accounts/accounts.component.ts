import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

                                                                                   

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goCreateAccount(): void {
    this.router.navigate(['/accounts/create'])
  }

  
}

