import { Component, OnInit } from '@angular/core';
//import { Http } from "@angular/http";
//import "rxjs/add/operator/map";

import { AppserviceService } from '../appservice.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  lists;
  datalist;
 

  // constructor(private http:Http){
  //   this.lists$ = http.get("https://starwars-json-server-ewtdxbyfdz.now.sh/people")
  //   .map( (p) => p.json());

  // }

  constructor(private httpservice:AppserviceService){
      
  }

  ngOnInit() {
    this.getData();
  }

  getData(){
    return this.datalist = this.httpservice.getListShutterShock()
      .subscribe(res => this.lists = res.data, error => alert(error),() => console.log('finished'));
  }

}
