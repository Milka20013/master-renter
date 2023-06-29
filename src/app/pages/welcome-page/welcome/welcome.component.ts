import { Component } from '@angular/core';
import { DbService } from 'src/app/db/db.service';

@Component({
  selector: 'npm-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.less'],
})
export class WelcomeComponent {
  token = '';

  generateToken(): void {
    this.token = crypto.randomUUID();
    this.dbService.addToken(this.token);
  }

  checkToken(): void {
    let input = <HTMLInputElement>document.getElementById('token-input');
    if (this.dbService.checkToken(input?.value)) {
      console.log("you're in");
    } else {
      console.log('nop');
    }
  }
  constructor(private dbService: DbService) {}
}
