import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICharacters, IResultados } from '../interfaces/characters';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }

  intercept( request: HttpRequest<ICharacters['results']>, next: HttpHandler):
  Observable<HttpEvent<ICharacters['results']>>{
    const reqClone=request.clone({
      url:environment.baseUrl+'/'+request.url
    });

    return next.handle(reqClone);

  }


}
