import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import {Http,Response,Request, RequestOptions,Headers} from '@angular/http';
import {environment} from '../environments/environment';

@Injectable()
export class SigninService { 

  constructor(private http:Http) { }
  Sign(resumedata): Observable<Response> {
    let url=environment._userApiurl+'SignInAccess';
    let header = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: header });
    return this
        .http
        .post(url,JSON.stringify(resumedata),options)
        .map(
          (response:Response)=>{
            return response.json();
          })
        .catch(this.handleerror)
}
//  Use scound type requset
       //return this.http.post(url,JSON.stringify(resumedata),options)


handleerror(error:Response) {
  return Observable.throw(error.statusText);
}

}
