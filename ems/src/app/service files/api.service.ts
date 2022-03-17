import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const baseurl = `${environment.apiurl}`;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getall(){
    return this.http.get(baseurl)
  }
  getById(id: any) {
    return this.http.get(`${baseurl}/${id}`)
}
create(params: any) {
  return this.http.post(baseurl,params)
}
update(id: any, params: any) {
    return this.http.put(`${baseurl}/${id}`, params)
}
delete(id: any) {
    return this.http.delete(`${baseurl}/${id}`)
}
}
