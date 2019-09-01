import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Platform } from 'ionic-angular'; //import Platform
//import { ToastController } from 'ionic-angular';
//import { Diagnostic } from '@ionic-native/diagnostic/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import {
  TranslateService
} from '@ngx-translate/core';
@Component({
  selector: 'page-capture-photo',
  templateUrl: 'capture-photo.html',
  //providers: [Camera]
})
export class CapturePhotoPage {
 base64Image:string; 
 myphoto:any ; 
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private camera:Camera,
              public platform:Platform,
         //     private toastCtrl: ToastController ,
          //    private diagnostic: Diagnostic ,
              public androidPermissions: AndroidPermissions,
              public translate: TranslateService
              ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CapturePhotoPage');
  }
  
  b() {
 
    console.log("dddd");
       
      
    
        // this.diagnostic.isCameraAvailable().then((SUCCESS)=>{
        //   let toast = this.toastCtrl.create({
        //     message: 'CORRECT',
        //     duration: 3000,
        //     position: 'top'
        //   });
            
      //  toast.present();
        const options: CameraOptions = {
          quality: 100,
          destinationType: this.camera.DestinationType.FILE_URI,
          encodingType: this.camera.EncodingType.JPEG,
          mediaType: this.camera.MediaType.PICTURE
        }
        


        this.camera.getPicture().then((imageData) => {
         // imageData is either a base64 encoded string or a file URI
         // If it's base64 (DATA_URL):
        this.base64Image = 'data:image/jpeg;base64,' + imageData;
        console.log(" image yse ");
        }, (err) => {
         // Handle error
        });
        }

          // ).catch((ERR)=>{
          //   let toast = this.toastCtrl.create({
          //     message: 'wrong',
          //     duration: 3000,
          //     position: 'top'
          //   });
              
          // toast.present();
          // });
     
        }
   



