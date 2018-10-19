
import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler,
    HttpRequest, HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
// 35.194.36.123		trial1056.api.mashery.com
export class Requestintercept implements HttpInterceptor {
    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let service = req.params.get('service');
        if (environment[''].withToken) {
            const headers = new HttpHeaders({
                'Authorization': `Bearer` 
            });
            req = req.clone({ body: req.body, headers });
        }
        return next.handle(req);
    }

}

