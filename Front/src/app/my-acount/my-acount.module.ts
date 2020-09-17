import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyAcountPageRoutingModule } from './my-acount-routing.module';

import { MyAcountPage } from './my-acount.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyAcountPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [MyAcountPage]
})
export class MyAcountPageModule {}
