import { Injectable } from '@angular/core';
import { HttpInterceptor,HttpRequest,HttpHandler, HttpEvent } from '@angular/common/http'
import { UserService } from '../service/user.service';
import { Observable } from 'rxjs';

@Injectable()

export class AuthInterceptor implements HttpInterceptor {

    constructor(private userService : UserService) {}
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.userService.getToken()
         req = req.clone({
            setHeaders:{
                Authorization: 'Bearer ' + token
            }
        });
        return next.handle(req)
    }
}