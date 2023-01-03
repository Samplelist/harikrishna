
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TouristService {

  constructor(public http: HttpClient) {

  }
  getTourist(): Observable<any> {
    return this.http.get('http://restapi.adequateshop.com/api/Tourist').pipe(map(data1 => ({
      data1
    })))
  }

  // updatelist():Observable<any> {
  //   return this.http.post<>('http://restapi.adequateshop.com/api/Tourist')
  // }





}
