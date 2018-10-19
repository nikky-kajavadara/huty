import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ChoosenomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-choosenom',
  templateUrl: 'choosenom.html',
})
export class ChoosenomPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChoosenomPage');
  }
  goToVoteNomdynamic(){
    this.navCtrl.push("VotenomPage");
  }
  goToResult(){
    this.navCtrl.push("ResultPage");
  } 
 
}
