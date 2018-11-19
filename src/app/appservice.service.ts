import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import "rxjs/add/operator/map"; 
//import { Observable } from "rxjs/Observable";


@Injectable()
export class AppserviceService {

  api = 'https://starwars-json-server-ewtdxbyfdz.now.sh';
  apiShutterShock = 'https://api.shutterstock.com/v2/images/search?per_page=15&query=smile&view=full';

  constructor(private http:Http) { 
      
  }

  //for basic header for shuttershock 
  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Basic ' +
      btoa('2587cf58e3c702794e7c:729fddab669555f9b4ba1e11c5e1086dedc3024e')); 
  }

  getList(){

    return this.http.get(this.api + '/people')
          .map( (p) => p.json());  
  }
  
  getListShutterShock(){
    const headers = new Headers();
    this.createAuthorizationHeader(headers);

    return this.http.get(this.apiShutterShock, { headers: headers })
          .map( (p) => p.json());  
  }

}
