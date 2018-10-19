import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HitsupList2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hitsup-list2',
  templateUrl: 'hitsup-list2.html',
})
export class HitsupList2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HitsupList2Page');
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
    this.navCtrl.push('HitprofilePage');
  }

  bakcToPage()
  {
    this.navCtrl.pop();
  }
  
}
