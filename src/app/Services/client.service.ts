import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  getRequest(route: string, token?:string) {

    let config:any = {
      responseType: "json"
    }
    if (token){
      const header = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      config["headers"] = header;
    }
    console.log(config);

    return this.http.get(route, config);
  }

  postRequest(route: string, data?: any, token?: string) {
    if (token) {
      let config = {
        responseType: 'json',
      };
      let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      });

      return this.http.post(route, data, { headers });
    } else {
      let config: any = {
        responseType: 'json',
      };
      return this.http.post(route, data, config);
    }
  }

  getRequestAll(route: string) {
    let config:any = {
      responseType: "json"
    }
    const header = new HttpHeaders().set('Authorization', '57ydf544ljka559ahjkfgd1');
    config["header"] = header;
    return this.http.get(route, config);
  }

  getRequestId (route: string) {
    let config:any = {
      responseType: "json"
    }  
    const header = new HttpHeaders().set('Authorization', '57ydf544ljka559ahjkfgd1');
    config["header"] = header;
    return  this.http.get(route, config);
  }

  deleteRequestId (route: string) {
    let config:any = {
      responseType: "json"
    }  
    const header = new HttpHeaders().set('Authorization', '57ydf544ljka559ahjkfgd1');
    config["header"] = header;
    return  this.http.delete(route, config);
  }

}
 