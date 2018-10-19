import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Device } from '@ionic-native/device';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private device: Device,private storage: Storage) {
  }

  ionViewDidLoad() {
    this.storage.set('device_uuid', this.device.uuid);
    this.storage.set('device_platform', this.device.platform);
    console.log('ionViewDidLoad HomePage');
  }
  goToLogin()
  {
    this.navCtrl.push('LoginPage');
  }
  goToSignup()
  {
    this.navCtrl.push('SignupPage');
  }
}
