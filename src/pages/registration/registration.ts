import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RegistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationPage');
  }
  goToProfile()
  {

    this.navCtrl.push('ProfilePage');
  }
  goToMaphitPage()
  {
    this.navCtrl.push('MaphitPage');
  }
  bakcToPage()
  {
    this.navCtrl.pop();
  }

  onSubmit(){
    console.log("submit console");
    this.goToMaphitPage();
  }
}
