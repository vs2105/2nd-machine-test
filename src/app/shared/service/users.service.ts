import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  userurl:string=`${environment.baseurl}/users`
  constructor(private _http:HttpClient) { }

  getsingleusers(obj:any):Observable<any>{
  return this._http.post<any>(this.userurl,obj)
  }

  getusers():Observable<any[]>{
    return this._http.get<any[]>(this.userurl)
  }

 

}
