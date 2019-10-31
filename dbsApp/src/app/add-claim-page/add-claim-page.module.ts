import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddClaimPagePage } from './add-claim-page.page';

const routes: Routes = [
  {
    path: '',
    component: AddClaimPagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddClaimPagePage]
})
export class AddClaimPagePageModule {}
