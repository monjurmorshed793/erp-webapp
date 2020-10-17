import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {LocalStorageService, SessionStorageService} from "ngx-webstorage";
import {SERVER_API_URL} from "../../app.constants";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    constructor(private localStorage: LocalStorageService, private sessionStorage: SessionStorageService) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(!request || !request.url || (request.url.startsWith('http')) && !(SERVER_API_URL && request.url.startsWith(SERVER_API_URL))){
            return next.handle(request);
        }

        const token = this.localStorage.retrieve('authenticationToken') || this.sessionStorage.retrieve('authenticationToken');
        if(token){
            request = request.clone({
                setHeaders:{
                    Authorize: 'Bearer '+ token,
                },
            });
        }

        return next.handle(request);
    }


}