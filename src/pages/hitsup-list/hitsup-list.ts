import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HitsupListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hitsup-list',
  templateUrl: 'hitsup-list.html',
})
export class HitsupListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HitsupListPage');
  }
  goToSetting()
  {

    this.navCtrl.push('SettingPage');
  }
 
  goToProfile()
  {

    this.navCtrl.push('ProfilePage');
  }
  goToHitsupListPage()
  {

    this.navCtrl.push('HitsupListPage');
  }
  goToHitsupList2Page()
  {

    this.navCtrl.push('HitsupList2Page');
  }
  goToNomprofilePage(){
    this.navCtrl.push('NomprofilePage');
  }
  bakcToPage()
  {
    this.navCtrl.pop();
  }
}
