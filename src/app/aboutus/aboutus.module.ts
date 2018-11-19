import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AboutusComponent } from "app/aboutus/aboutus.component";
import { AboutusOneComponent } from "app/aboutus/aboutusone.component";
import { HttpModule } from "@angular/http";

import { AppserviceService } from '../appservice.service';

const routes = [
    { path:'', component: AboutusComponent },
    { path:':id', component: AboutusOneComponent }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        HttpModule
    ],
    declarations: [AboutusComponent, AboutusOneComponent],
    providers:[AppserviceService]

})

export class AboutusModule{

    
}



