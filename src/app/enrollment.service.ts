import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EnrollmentService {
  _url = 'https://httpbin.org/post';
  myHeaders = new HttpHeaders().set('Authorization', 'my-auth-token');
  data;
  constructor(private _http: HttpClient) {}

  enroll(userData) {
    return this._http.post<any>(this._url, userData, {headers: this.myHeaders});
    
  }
  
  // enroll(userData) {
  //    this._http.post<any>(this._url, userData, {headers: this.myHeaders}).subscribe(data => {
  //      this.data=data;
  //      return this.data;
  //      });
    
  // }
  
}
