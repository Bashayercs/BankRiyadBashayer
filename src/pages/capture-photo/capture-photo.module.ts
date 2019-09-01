import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CapturePhotoPage } from './capture-photo';

@NgModule({
  declarations: [
    CapturePhotoPage,
  ],
  imports: [
    IonicPageModule.forChild(CapturePhotoPage),
  ],
})
export class CapturePhotoPageModule {}
