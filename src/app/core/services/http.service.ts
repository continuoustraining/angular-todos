import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import {User} from "../model/user";

import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {

  readonly randomMeApi: string = 'https://randomuser.me/api/';

  constructor(
    private http: Http
  ) { }

  public getUsers(limit: number): Observable<User[]> {
    return this.http.get(this.randomMeApi + `?results=${limit}`)
      .map(response => response.json().results)
      .map(jsonArray => jsonArray.map(randomUser => {
          return {
            firstName: randomUser.name.first,
            lastName: randomUser.name.last
          }
        }
      )).publishReplay().refCount()
  }
}
