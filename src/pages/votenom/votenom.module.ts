import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VotenomPage } from './votenom';

@NgModule({
  declarations: [
    VotenomPage,
  ],
  imports: [
    IonicPageModule.forChild(VotenomPage),
  ],
})
export class VotenomPageModule {}
