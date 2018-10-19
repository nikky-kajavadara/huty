import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HitprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hitprofile',
  templateUrl: 'hitprofile.html',
})
export class HitprofilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HitprofilePage');
  }
  goToVotePage()
  {

    this.navCtrl.push('VotePage');
  }
  bakcToPage()
  {
    this.navCtrl.pop();
  }
  goToSetting()
  {

    this.navCtrl.push('SettingPage');
  }
  goToPariticipant()
  {
    this.navCtrl.push('ParticipantPage');
  }

}
