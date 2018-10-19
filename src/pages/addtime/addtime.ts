import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddtimePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addtime',
  templateUrl: 'addtime.html',
})
export class AddtimePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddtimePage');
  }
  bakcToPage()
  {
    this.navCtrl.pop();
  }
  goToSetting()
  {
    this.navCtrl.push('SettingPage');
  }
  goToAksPage()
  {
    
    this.navCtrl.push('AddParticipantPage');
  }
}
