import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NoOfParticipantPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-no-of-participant',
  templateUrl: 'no-of-participant.html',
})
export class NoOfParticipantPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NoOfParticipantPage');
  }
  goToPayer()
  {
    this.navCtrl.push('CodegamePage');
  }

  bakcToPage()
  {
    this.navCtrl.pop();
  }
  goToSetting()
  {

    this.navCtrl.push('SettingPage');
  }
}
