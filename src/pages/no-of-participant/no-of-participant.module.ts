import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NoOfParticipantPage } from './no-of-participant';

@NgModule({
  declarations: [
    NoOfParticipantPage,
  ],
  imports: [
    IonicPageModule.forChild(NoOfParticipantPage),
  ],
})
export class NoOfParticipantPageModule {}
