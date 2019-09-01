import {
  Component
} from '@angular/core';
import {
  NavController,
  MenuController,
  NavParams
} from 'ionic-angular';
import {
  Storage
} from '@ionic/storage';
import {
  HomePage
} from '../home/home';
import {
  AlertController
} from 'ionic-angular';
import {
  TranslateService
} from '@ngx-translate/core';

import {
  ToastController
} from 'ionic-angular';


import {
  Platform
} from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  lang: any;
  protected error: string;
  protected rememebr: string;
  protected password: "";
  protected username = "";
  protected users = [{
      username: "Tariq",
      password: "1234"
    },
    {
      username: "Ahmad",
      password: "12345"
    },

    {
      username: "Hisham",
      password: "123456"
    },
  ]

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public platform: Platform,
    private storage: Storage,
    public alertCtrl: AlertController,
    private menuCtrl: MenuController,
    private toastCtrl: ToastController,
    public translate: TranslateService) {
    this.lang = this.translate.currentLang;
  }

  ionViewDidLoad() {
    this.menuCtrl.enable(false);
  }

  onLogin() {
    this.error = null;
    // Find the user from users db by username
    const foundUser = this.users.find((currentUser) => {
      return currentUser.username.toLowerCase() === this.username.toLowerCase();
    });

    console.log(`The user`, foundUser);
    // If user does NOT exist, show error and return
    if (foundUser === undefined) {


      {
        let toast = this.toastCtrl.create({
          message: this.translate.instant("Password is wrong ,Try again"),
          duration: 3000,
          position: 'bottom'
        });


        toast.present();
      }
      //this.error = 'No user with this username.';
      return;
    }

    // Check password is correct, if NOT correct show error and return

    if (foundUser.password !== this.password) {
      {
        let toast = this.toastCtrl.create({
          message: this.translate.instant("Password is wrong ,Try again"),
          duration: 3000,
          position: 'bottom'
        });


        toast.present();
      }
      //this.error = 'Password is not correct.';
      return;
    }


    // Store user data in localStorage
    console.log(this.rememebr);

    this.storage.ready().then(() => {
      this.storage.set('username', foundUser.username);
      this.storeLastLogin(foundUser);
      if (this.rememebr) {
        console.log("rememebr");
        this.storage.set('rememebr', foundUser.username);
      }

      // Login the user , an redirect to HomePage
      this.navCtrl.setRoot(HomePage);
    });

  }

  private async storeLastLogin(user) {
    let lastLoginString = await this.storage.get('last_logins_' + user.username);
    if (lastLoginString == null) {
      lastLoginString = '[]';
    }

    let lastLogins = JSON.parse(lastLoginString);
    lastLogins.push((new Date()).getTime());

    this.storage.set('last_logins_' + user.username, JSON.stringify(lastLogins));
  }


  onChangeLanguage() {
    this.translate.use(this.lang);
    if (this.lang == "ar") {
      this.platform.setDir('rtl', true);
    } else {
      this.platform.setDir('ltr', true);
    }

  }
}
