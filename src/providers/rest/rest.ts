import { HttpClient } from '@angular/common/http';
import { RequestOptions, Headers,RequestOptionsArgs } from '@angular/http';
import { Injectable } from '@angular/core';
import { GlobalProvider } from '../global/global';
import { Storage } from '@ionic/storage';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
  public device_uuid:string;
  public device_platform:string;
  constructor(public http: HttpClient, public global: GlobalProvider,private storage: Storage) {
    console.log('Hello RestProvider Provider');
  }

  login(login){

    var headers = new Headers({
      'content-type':'application/json',
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Methods':'POST, GET, OPTIONS, PUT',
      'Accept':'application/json'
    });

    //let options = new RequestOptions({ headers:headers });

    this.storage.get('device_uuid').then((val) => {
      this.device_uuid = val;
    });
    this.storage.get('device_platform').then((val) => {
      this.device_platform = val;
    });
    login['device_token'] = this.device_uuid ? this.device_uuid : "dhfjsdgfsdf";
    login['device_type'] = this.device_platform == "android" ? 1 : 2;
    // let send_data = JSON.stringify(login);
    let body = new FormData();
    body.append('email', login.email);
    body.append('password', login.password);
    body.append('device_token', login.device_token);
    body.append('device_type', login.device_type);
    //console.log(send_data);

    return new Promise(resolve => {
      this.http.post(this.global.apiUrl+"/login", body, options?: RequestOptionsArgs).subscribe(data => {
        resolve(data);
        console.log("----------success -------------");
        console.log(data);
        
      }, err => {
        console.log("----------error -------------");
        console.log(err);
      });
    });
  }

}
