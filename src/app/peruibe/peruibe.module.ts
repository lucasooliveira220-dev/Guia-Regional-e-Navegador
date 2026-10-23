import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PeruibeionicPageRoutingModule } from './peruibeionic-routing.module';

import { PeruibeionicPage } from './peruibeionic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PeruibeionicPageRoutingModule
  ],
  declarations: [PeruibeionicPage]
})
export class PeruibeionicPageModule {}
