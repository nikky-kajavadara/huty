import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ResultnomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resultnom',
  templateUrl: 'resultnom.html',
})
export class ResultnomPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultnomPage');
  }

  bakcToPage()
  {
    this.navCtrl.pop();
  }
  goToSetting()
  {
    this.navCtrl.push('SettingPage');
  }
  goToFeedBack()
  {
    this.navCtrl.push('FeedbackPage');
  }
}
