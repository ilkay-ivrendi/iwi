import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [CommonModule, MaterialModule, IonicModule.forRoot()],
  exports: [MaterialModule]
})
export class iwiUIModule {}
