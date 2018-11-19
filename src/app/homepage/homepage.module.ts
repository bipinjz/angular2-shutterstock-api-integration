import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { HomepageComponent } from './homepage.component';
import { AppserviceService } from "app/appservice.service";


const routes = [
  { path: '', component: HomepageComponent }  
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomepageComponent],
  providers:[AppserviceService]
})
export class HomepageModule { }
