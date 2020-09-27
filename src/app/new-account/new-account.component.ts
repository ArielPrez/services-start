import { Component} from '@angular/core';
import { LoggingService } from '../services/logging.service';
import { AccountsService } from '../services/accounts.service';
import { stringify } from 'querystring';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
})
export class NewAccountComponent {
  constructor(private loggingService: LoggingService,
              private accountsService: AccountsService){}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);
    // this.loggingService.logStatusChange(accountStatus);

    // This codes doesn't make any changes it simply try to demonstrate:
    // The use of Services for Cross-Component Communication.
    console.log(this.accountsService.statusUpdated.on(
      status, (status: string) => alert('New status: ' + status)));
      // This code actually goes in the constructor, but doesn't work either.
      // this.accountsService.statusUpdated.subscribe(
      //   (status: string) => alert('New status: ' + status));

  }
}
