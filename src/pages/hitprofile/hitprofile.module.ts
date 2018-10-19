import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HitprofilePage } from './hitprofile';

@NgModule({
  declarations: [
    HitprofilePage,
  ],
  imports: [
    IonicPageModule.forChild(HitprofilePage),
  ],
})
export class HitprofilePageModule {}
