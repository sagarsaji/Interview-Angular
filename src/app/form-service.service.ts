import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormServiceService {

  constructor(private http:HttpClient){
  }

  public DoRegistration(form: any) {
    return this.http.post("http://localhost:8080/add",form,{responseType:'text' as 'json'});
  }

}
