import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SharePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-share',
  templateUrl: 'share.html',
})
export class SharePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SharePage');
  }

  bakcToPage()
  {
    this.navCtrl.pop();
  }
  gotoPayer()
  {

    this.navCtrl.push("AddParticipantPage");
  }
  goToSetting()
  {

    this.navCtrl.push('SettingPage');
  }
}
