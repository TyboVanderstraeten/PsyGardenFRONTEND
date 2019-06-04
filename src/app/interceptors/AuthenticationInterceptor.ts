import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../modules/user/authentication.service';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {
    constructor(private _authenticationService: AuthenticationService) { }

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        if (req.url.startsWith('https://maps.googleapis.com/maps/api/geocode/')) {
            return next.handle(req);
        }
        if (this._authenticationService.token.length) {
            const clonedRequest = req.clone({
                headers: req.headers.set(
                    'Authorization',
                    `Bearer ${this._authenticationService.token}`
                )
            });
            return next.handle(clonedRequest);
        }
        return next.handle(req);
    }
}