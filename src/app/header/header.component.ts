import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  header ='Angular 2 Shutterstock API Integration';
  navs = [
    {url:"/", label:"Home" },
    // {url:"/aboutus", label:"About Us" },
    // {url:"/aboutus/1", label:"One" }
  ];
  
  constructor() { 
    
  }

  ngOnInit() {
     
  }

  showHeader(){
      return this.header;
      
  }

}
