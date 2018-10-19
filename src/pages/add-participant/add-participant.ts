import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddParticipantPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-participant',
  templateUrl: 'add-participant.html',
})
export class AddParticipantPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  bakcToPage()
  {
    this.navCtrl.pop();
  }
  goToSetting()
  {
    this.navCtrl.push('SettingPage');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddParticipantPage');
  }
  goToResult(){
    this.navCtrl.push("ResultPage");
  }
  goToChoosePage(){
    this.navCtrl.push("ChoosePage");
  }
  goToAddtimePage(){
    this.navCtrl.push("AddtimePage");
  }
  
}

