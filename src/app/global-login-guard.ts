import { Injectable } from '@angular/core';
import { CanActivate,
         ActivatedRouteSnapshot,
         RouterStateSnapshot,
         Router} from '@angular/router';
import { SessionStorage } from 'angular-web-storage';

@Injectable()
export class GlobalLoginGuard implements CanActivate {

    @SessionStorage() sessionValue;

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const params = route.queryParams;
        const nParams = Object.assign({}, params);
        nParams.returnUrl = state.url.split('?')[0];

        if (this.sessionValue === null) {
            this.router.navigate(['login'], { queryParams: nParams });
            return false;
        }
        if (this.sessionValue.length < 20) {
            this.router.navigate(['login'], { queryParams: nParams });
            return false;
        }
        return true;
    }
}
