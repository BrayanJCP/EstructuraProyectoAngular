import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class MasterService {

  constructor(private http: HttpClient) { }
  CallGenericService(service: string, mehod: string, body: any): Observable<any> {
    switch (mehod) {
      case 'POST':
        return this.CallServicePost(service,body);
      case 'PUT':
        return this.CallServicePut(service,body);
      default:
        return this.CallService(service,body);
    }
  }
  CallServicePost(service: string, body: any): Observable<any> {
    const param = new HttpParams().set('service', service);
    let sub = this.http.post(environment["url"] + environment[service].method, body, { observe: "response" });
    sub.subscribe(resp => {

    }, error => {

    });
    return sub;
  }
  CallServicePut(body: any, service: string): Observable<any> {
    const param = new HttpParams().set('service', service);
    let sub = this.http.put(environment["url"] + environment[service].method, body, { observe: "response" });
    sub.subscribe(resp => {

    }, error => {

    });
    return sub;
  }
  CallService(body: any, service: string): Observable<any> {
    let data = "";
    const param = new HttpParams().set('service', service);
    let sub = this.http.get(environment["url"] + environment[service].method, { observe: "response" });
    sub.subscribe(resp => {

    }, error => {

    });
    return sub;
  }
}
