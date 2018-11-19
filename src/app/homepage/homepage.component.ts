import { Component, OnInit } from '@angular/core';
import { AppserviceService } from "app/appservice.service";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  lists;
  path;

  constructor(private httpservice:AppserviceService) { }

  ngOnInit() {

    this.getData();
    this.path = this.getApiPath();

  }

  getData(){
    
      //return this.httpservice..getList()
      return this.httpservice.getListShutterShock()
      .subscribe(res => this.lists = res.data, error => alert(error),() => console.log('finished'));
  }
  getApiPath(){
    return this.httpservice.api;
  }

}
