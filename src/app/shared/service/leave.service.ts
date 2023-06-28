import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {
  leaveurl : string =`${environment.baseurl}/leave`

  constructor(private _http:HttpClient) { }

  getallleavearr():Observable<any[]>{
   return this._http.get<any[]>(this.leaveurl)
  }

  getarray(objt:any):Observable<any>{
    return this._http.post<any>(this.leaveurl,objt)
  }

  updateobj1(obj:any):Observable<any>{
    console.log(obj.id);
    let  updatestring=`${this.leaveurl}/${obj.id}`
      return this._http.patch<any>(updatestring,obj)
    }
  
}
