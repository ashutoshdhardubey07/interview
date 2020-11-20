// import { environment } from './../../environments';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
// import {environment}
@Injectable({
  providedIn: 'root'
})
export class DetailServiceService {
  private pendingHTTPRequests$ = new Subject<void>();

  constructor(public http: HttpClient) { }

  getApi(url): Observable<any> {
    return this.http.get(environment.baseUrl +url)
  }
}
