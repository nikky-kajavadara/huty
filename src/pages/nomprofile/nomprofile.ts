import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NomprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nomprofile',
  templateUrl: 'nomprofile.html',
})
export class NomprofilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NomprofilePage');
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
}
