import { Injectable } from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import {environment} from '../environments/environment';

@Injectable()
export class PostresumeService { 
 
  
  constructor(private http: Http) { }

   // Function to perform POST operation to create a new employee
   postresume(resumedata): Observable<Response> {
    let url=environment._userApiurl+'myportal';
    let header = new Headers(); 
    header.append('Content-Type', 'multipart');  
    return this
        .http
        .post(url,resumedata).map((response:Response)=>{return response.json();}).catch(this.handleerror)
}

handleerror(error:Response) {
  return Observable.throw(error.statusText);
}

}
