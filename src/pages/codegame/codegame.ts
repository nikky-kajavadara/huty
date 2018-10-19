import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CodegamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-codegame',
  templateUrl: 'codegame.html',
})
export class CodegamePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CodegamePage');
  }
  
  goToSharePage(){
    this.navCtrl.push("SharePage");
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
