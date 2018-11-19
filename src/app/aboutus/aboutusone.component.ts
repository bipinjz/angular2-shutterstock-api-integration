import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Http, Headers } from "@angular/http";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
//import { BehaviorSubject} from 'rxjs/BehaviorSubject';


@Component({
  templateUrl: './aboutusone.component.html'
})

export class AboutusOneComponent implements OnInit {

  //lists$ = new BehaviorSubject({name: 'Loading...', image: ''});
  lists;

  constructor(private route:ActivatedRoute, private http:Http) { 
        const api = "https://api.shutterstock.com/v2/images/";

        const headers = new Headers();
        this.createAuthorizationHeader(headers);

        

        this.lists= route.params
          .map( (p:any) => p.id)
          .switchMap( id => http.get(api + id + '?view=full' , { headers: headers } ))
          .map( r => r.json())
          .subscribe(res => this.lists = res, error => alert(error),() => console.log('finished'));
          
          
          //.map(contact => Object.assign({}, contact, {image: api + contact.image}))
          //.subscribe(this.lists$)

          
  }


  ngOnInit() {
  }

  //for basic header for shuttershock 
  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Basic ' +
      btoa('2587cf58e3c702794e7c:729fddab669555f9b4ba1e11c5e1086dedc3024e')); 
  }

  goBack(){
    window.history.back();
  }
}
