import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }

  intercept( request: HttpRequest<any>, next: HttpHandler):
  Observable<HttpEvent<any>>{
    const reqClone=request.clone({
      url:environment.baseUrl+'/'+request.url


    })
    console.log("has pasado");
    return next.handle(reqClone);

  }


}
