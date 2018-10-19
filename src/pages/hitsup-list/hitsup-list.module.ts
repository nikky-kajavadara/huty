import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HitsupListPage } from './hitsup-list';

@NgModule({
  declarations: [
    HitsupListPage,
  ],
  imports: [
    IonicPageModule.forChild(HitsupListPage),
  ],
})
export class HitsupListPageModule {}
