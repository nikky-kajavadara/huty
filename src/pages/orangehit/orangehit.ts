import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the OrangehitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-orangehit',
  templateUrl: 'orangehit.html',
})
export class OrangehitPage {
  hits:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.hits = navParams.get('yh');
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrangehitPage');
  }

  bakcToPage()
  {
    this.navCtrl.pop();
  }
  goToSetting()
  {
    this.navCtrl.push('SettingPage');
  }
  goToResult()
  {    
    this.navCtrl.push('ResultnomPage');
  }  
}
