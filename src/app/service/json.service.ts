import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class JsonService {

  constructor(private readonly http: HttpClient) {


   }


  async getJsonData(){
  
    const data= await this.http.get('https://jsonplaceholder.typicode.com/photos').subscribe(v=>{
      console.log(v);
      return v
    })
    return data

  }

}
