import {
  Component
} from '@angular/core';
import {
  NavController,
  MenuController
} from 'ionic-angular';

import * as moment from 'moment';

import {
  TranslateService
} from '@ngx-translate/core';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {



  protected lastLoginTime: string;

  constructor(public navCtrl: NavController,
    private menuCtrl: MenuController,
    public translate: TranslateService
  ) {


  }

  ionViewDidLoad() {
    this.setLastLogin();
    this.menuCtrl.enable(true);
  }

  private setLastLogin() {
    const username = localStorage.getItem('username');
    console.log('home username', username);
    const lastLoginsString = localStorage.getItem('last_logins_' + username);
    if (!lastLoginsString) {
      console.warn('no last logins in localStorage')
      return;
    }

    let lastLogins = JSON.parse(lastLoginsString);
    const index = lastLogins.length > 1 ? lastLogins.length - 2 : lastLogins.length - 1;
    let lastLogin = lastLogins[index];
    this.lastLoginTime = moment(+lastLogin).format('MMMM Do YYYY, h:mm:ss a');;
  }


}
