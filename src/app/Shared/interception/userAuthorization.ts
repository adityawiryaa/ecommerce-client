import { Observable } from 'rxjs';
import { UserService } from '../service/user.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import Swal from 'sweetalert2'


@Injectable({
    providedIn : 'root'
})
export class userAuthorization implements CanActivate {

    constructor(private userService : UserService, private router : Router) {}

    canActivate(
        next : ActivatedRouteSnapshot,
        state : RouterStateSnapshot
    ) : Observable <boolean> |Promise<boolean> |boolean{
        if(this.userService.isLogin !== true ) {
            this.router.navigate([''])
            Swal.fire('Sorry','You cant access, please Login First','error')
        }
        return true
    }

}