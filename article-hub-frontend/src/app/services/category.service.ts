import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  url = environment.apiUrl;

  constructor(private httpClient:HttpClient) { }

  addNewCaterogy(data:any){
    return this.httpClient.post(this.url+
      "/category/addNewCategory",data,{
        headers: new HttpHeaders().set('Content-Type',"application/json")
      })
   }

   updateCategory(data:any){
    return this.httpClient.post(this.url+
      "/category/updateCategory",data,{
        headers: new HttpHeaders().set('Content-Type',"application/json")
      })
   }

   getAllCategory(){
    return this.httpClient.get(this.url + "/category/getAllCategory");
   }


}
