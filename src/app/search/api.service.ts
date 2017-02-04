import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {

  clientID: string = '90701b9ba992486bae030407bcb0d67d';
  clientSercret: string = '40ff2250ed894096808e8187481a95f8';
  baseUrl: string = 'https://api.spotify.com/v1/search?type=artist&limit=10&client_id=' + this.clientID + '&q=';

  constructor(private _http: Http) { }

  search(queryString: string) {
      let _URL = this.baseUrl + queryString;
      return this._http.get(_URL);
  }

}
