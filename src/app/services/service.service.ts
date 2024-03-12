import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  base_url='https://recipe-server-1-gi8p.onrender.com'
  constructor(private http:HttpClient) { }

  // get users

  getRecp(){

    return this.http.get(`${this.base_url}/recipies`)
  }

  // addUser

  addRecp(bodyData:any){
    return this.http.post(`${this.base_url}/recipies`,bodyData)
  }

  loginApi(){
    return this.http.get(`${this.base_url}/admins`)
  }

   // delet recp
   deleteRecp(id:any){
    return this.http.delete(`${this.base_url}/recipies/${id}`)
  }


  getSinglRecp(id:any){

    return this.http.get(`${this.base_url}/recipies/${id}`)
  }

  // update recipie

  updateRecp(id:any,bodyData:any){
    return this.http.put(`${this.base_url}/recipies/${id}`,bodyData)
  }

  updateAdmin(bodyData:any){

    return this.http.put(`${this.base_url}/admins/1`,bodyData)

  }

}
