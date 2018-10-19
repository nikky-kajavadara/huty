import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MaphitPage } from '../maphit/maphit';
import { Storage } from '@ionic/storage';
import { RestProvider } from "../../providers/rest/rest";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {
  public loginemail: string;
  public loginpassword: string;
  constructor(public navCtrl: NavController, public navParams: NavParams,private storage: Storage, public rest: RestProvider) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    this.storage.get('device_uuid').then((val) => {
      //console.log('Your name is', val);
    });
  }
  goToEditpwd()
  {
    this.navCtrl.push('EditpwdPage');
  }
  goToHomePage()
  {
    let login = {
      email:this.loginemail,
      password:this.loginpassword
    };
    this.rest.login(login);
    this.navCtrl.push("MaphitPage");
  }
  bakcToPage()
  {
    this.navCtrl.pop();
  }
}
