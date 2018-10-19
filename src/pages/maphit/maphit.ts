import { Component, ViewChild, ElementRef  } from '@angular/core';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  Marker,
  GoogleMapsAnimation,
  MyLocation
} from '@ionic-native/google-maps';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { SurveyPage } from '../survey/survey';


/**
 * Generated class for the MaphitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// declare var google;
// let map: any;
// let infowindow: any;
// let options = {
//   enableHighAccuracy: true,
//   timeout: 5000,
//   maximumAge: 0
// };
@IonicPage()
@Component({
  selector: 'page-maphit',
  templateUrl: 'maphit.html',
 
})

export class MaphitPage {
  map: GoogleMap;
  // @ViewChild('map') mapElement: ElementRef;
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController,public platform:Platform) {
    
    platform.ready().then(() => {
      
    });
  }
/*  asklive(){
    const alert = this.alertCtrl.create({
      title: 'ASK LIVE',
      subTitle: '',
      cssClass: 'myclass',
      buttons: ['OK']
    });
    alert.present();
  }*/

  // initMap() {
  //   navigator.geolocation.getCurrentPosition((location) => {
  //     console.log(location);
  //     map = new google.maps.Map(this.mapElement.nativeElement, {
  //       center: {lat: location.coords.latitude, lng: location.coords.longitude},
  //       zoom: 15
  //     });
  
  //     infowindow = new google.maps.InfoWindow();
  //     var service = new google.maps.places.PlacesService(map);
  //     service.nearbySearch({
  //       location: {lat: location.coords.latitude, lng: location.coords.longitude},
  //       radius: 1000,
  //       type: ['store']
  //     }, (results,status) => {
  //       if (status === google.maps.places.PlacesServiceStatus.OK) {
  //         for (var i = 0; i < results.length; i++) {
  //           this.createMarker(results[i]);
  //         }
  //       }
  //     });
  //   }, (error) => {
  //     console.log(error);
  //   }, options);
  //   var myplace = {lat: -33.8665, lng: 151.1956};
  // }

  // createMarker(place) {
  //   var placeLoc = place.geometry.location;
  //   var marker = new google.maps.Marker({
  //     map: map,
  //     position: placeLoc
  //   });
  
  //   google.maps.event.addListener(marker, 'click', function() {
  //     infowindow.setContent(place.name);
  //     infowindow.open(map, this);
  //   });
  // }
  loadMap() {
    // Create a map after the view is loaded.
    // (platform is already ready in app.component.ts)
    this.map = GoogleMaps.create('map_canvas', {
      camera: {
        target: {
          lat: 43.0741704,
          lng: -89.3809802
        },
        zoom: 18,
        tilt: 30
      }
    });

  }
  onButtonClick() {
    this.map.clear();

    // Get the location of you
    this.map.getMyLocation()
      .then((location: MyLocation) => {
        console.log(JSON.stringify(location, null ,2));

        // Move the map camera to the location with animation
        this.map.animateCamera({
          target: location.latLng,
          zoom: 17,
          tilt: 30
        })
        .then(() => {
          // add a marker
          let marker: Marker = this.map.addMarkerSync({
            title: '@ionic-native/google-maps plugin!',
            snippet: 'This plugin is awesome!',
            position: location.latLng,
            animation: GoogleMapsAnimation.BOUNCE
          });

          // show the infoWindow
          marker.showInfoWindow();

          // If clicked it, display the alert
          marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
            //this.showToast('clicked!');
          });
        });
      });
  }

  ionViewDidLoad() {
    this.loadMap();
    console.log('ionViewDidLoad MaphitPage');
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
  asklive()
  {
    
    this.navCtrl.push('SurveyPage');
  }
}








  

