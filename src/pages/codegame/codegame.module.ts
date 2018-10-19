import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CodegamePage } from './codegame';

@NgModule({
  declarations: [
    CodegamePage,
  ],
  imports: [
    IonicPageModule.forChild(CodegamePage),
  ],
})
export class CodegamePageModule {}
