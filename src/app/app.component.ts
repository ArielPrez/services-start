import { Component, OnInit } from '@angular/core';
import { AccountsService } from './services/accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountsService]
})
export class AppComponent implements OnInit {

  account: { name: string, status: string }[] = [];

  constructor(private accountsService: AccountsService) {}

  ngOnInit() {
    // This is a reference type, by setting it with equal it's getting access
    // to the exact same array as stored in the service.
    this.account = this.accountsService.accounts;
  }

  // title = 'services-start';


  
}
