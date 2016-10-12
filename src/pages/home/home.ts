import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { ScreenOrientation } from 'ionic-native';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }

  onLandscape(){
    document.addEventListener("deviceready", onDeviceReady, false);
      function onDeviceReady(){
        ScreenOrientation.lockOrientation('landscape');

        console.log(onDeviceReady);
      }
  }

  onPortrait(){
    document.addEventListener("deviceready", onDeviceReady, false);
      function onDeviceReady(){
        ScreenOrientation.lockOrientation('portrait');
      }
  }

}
