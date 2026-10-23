import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeruibeionicPage } from './peruibeionic.page';

const routes: Routes = [
  {
    path: '',
    component: PeruibeionicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeruibeionicPageRoutingModule {}
