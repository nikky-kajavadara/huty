import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NomprofilePage } from './nomprofile';

@NgModule({
  declarations: [
    NomprofilePage,
  ],
  imports: [
    IonicPageModule.forChild(NomprofilePage),
  ],
})
export class NomprofilePageModule {}
