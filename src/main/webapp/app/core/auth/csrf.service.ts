import { Injectable } from '@angular/core';
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class CsrfService {

  constructor(private cookieService: CookieService) { }

  getCSRF(name = 'XSRF-TOKEN'): string{
    return this.cookieService.get(name);
  }
}
