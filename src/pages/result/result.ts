import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StatisticsPage } from '../statistics/statistics';

/**
 * Generated class for the ResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})
export class ResultPage {

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
    console.log('ionViewDidLoad ResultPage');
  }
  goTostatistics(){
    this.navCtrl.push("StatisticsPage");
  }
  goToVote()
  {
    this.navCtrl.push("VotePage");
  }
}
