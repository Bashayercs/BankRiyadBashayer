import {
  Component
} from '@angular/core';
import {
  NavController,
  NavParams
} from 'ionic-angular';
import {
  TranslateService
} from '@ngx-translate/core';
import {
  Platform
} from 'ionic-angular';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  lang: any;

  constructor(
    public platform: Platform,
    public navCtrl: NavController,
    public navParams: NavParams,
    public translate: TranslateService) {

      this.lang = this.translate.currentLang;
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  
  onChangeLanguage(){
    this.translate.use(this.lang);
    

  }

 
}
