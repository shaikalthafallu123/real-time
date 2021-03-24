import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InputFieldService {
  
  constructor(private http : HttpClient) { }

  getCity(data : string){
    const httpParams = new HttpParams({
      fromObject:{
        term : data,
        record : "5",
        sourceId : "1",
      }
    });
   return this.http.get("https://www.carwale.com/api/v2/autocomplete/city/",{params :httpParams})
}
}
