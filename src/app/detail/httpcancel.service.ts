// httpcancel.service.ts
import { Injectable } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable()
export class HttpCancelService {
    private pendingHTTPRequests$ = new Subject<void>();
    constructor(router: Router) {
            router.events.subscribe(event => {
                if (event instanceof ActivationEnd) {
                  this.cancelPendingRequests();
                }
            });
    }

  public cancelPendingRequests() {
    this.pendingHTTPRequests$.next();
  }

  public onCancelPendingRequests() {
    return this.pendingHTTPRequests$.asObservable();
  }

}
