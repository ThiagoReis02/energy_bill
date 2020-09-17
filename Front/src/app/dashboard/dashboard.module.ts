import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule,
    NgxEchartsModule.forRoot({
      echarts,
    }),
  ],
  declarations: [DashboardPage]
})
export class DashboardPageModule {}
