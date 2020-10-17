import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LocalStorageService, SessionStorageService} from "ngx-webstorage";

type JwtToken = {
  id_token: string;
};

@Injectable({
  providedIn: 'root'
})
export class AuthServerProvider {

  constructor(private http: HttpClient, private $localStorage: LocalStorageService, private $sessionStorage: SessionStorageService) { }

  getToken(): string{
    return this.$localStorage.retrieve('authenticationToken') || this.$sessionStorage.retrieve('authenticationToken');
  }

  private authenticateSuccess(response: JwtToken, rememberMe: boolean): void{
    const jwt = response.id_token;
    if(rememberMe){
      this.$localStorage.store('authenticationToken', jwt);
    }else{
      this.$sessionStorage.store('authenticationToken', jwt);
    }
  }
}
