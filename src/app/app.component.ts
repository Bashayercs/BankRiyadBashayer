import {
  Component,
  ViewChild
} from '@angular/core';
import {
  Nav,
  Platform
} from 'ionic-angular';
import {
  StatusBar
} from '@ionic-native/status-bar';
import {
  SplashScreen
} from '@ionic-native/splash-screen';

import {
  HomePage
} from '../pages/home/home';
import {
  CapturePhotoPage
} from '../pages/capture-photo/capture-photo';
import {
  SettingsPage
} from '../pages/settings/settings';

import {
  LoginPage
} from '../pages/Login/Login';

import {
  TranslateService, LangChangeEvent
} from '@ngx-translate/core';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  //rootPage:any = TabsPage;

  rootPage: any = LoginPage;
  sidePage = "left";
  pages: Array<{
    title: string,
    component: any,
    icon: string

  }>;

  constructor(public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public translate: TranslateService
  ) {
    this.translate.onLangChange.subscribe
      ((event: LangChangeEvent) => {
        let element: HTMLElement = document.getElementById("menuSide");

        if (event.lang == "ar") {
          this.platform.setDir('rtl', true);
          this.sidePage = "right";
          this.platform.setLang("ar", true);

        }
        else {
          this.platform.setDir('ltr', true);
          this.sidePage = "left";
          this.platform.setLang("en", true);

        }
        element.setAttribute("side", this.sidePage);

        console.log(this.platform.isRTL);
        console.log(event.lang);



      })

    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [{
      title: 'Home',
      component: HomePage,
      icon: 'home'
    },
    {
      title: 'Capture Photo',
      component: CapturePhotoPage,
      icon: 'md-camera'
    },
    {
      title: 'Settings',
      component: SettingsPage,
      icon: 'home'
    },
    {
      title: 'Logout',
      component: null,
      icon: 'log-out'
    }


    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      console.log("yse");

      let username = localStorage.getItem('rememebr');
      if (username) {
        this.rootPage = HomePage
      }

      console.log(`AppComponent username`, username);

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      // initialize default language.
      this.translate.setDefaultLang('en');
      this.translate.use('en');

    });
  }

  openPage(page) {
    console.log('openPage', page);
    if (page.title == 'Logout') {
      console.log('Lougout page clicked');
      localStorage.removeItem('username');
      localStorage.removeItem('remember');
      this.nav.setRoot(LoginPage);
    } else if (page.title == 'Home') {
      this.nav.setRoot(HomePage);
    } else {
      this.nav.push(page.component);
    }

  }

}
