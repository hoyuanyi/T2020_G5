import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getCustomerID():Observable<any> {
  	const httpOptions = {
  		headers: {'identity': 'Group24','token': 'b8f08d3a-47b2-4238-86bf-a8ed776352c2'}
  	}
  	return this.http.get("http://techtrek-api-gateway.ap-southeast-1.elasticbeanstalk.com/customers/marytan", httpOptions)
  }

  getCustomerDetails():Observable<any> {
  	const httpOptions = {
  		headers: {'identity': 'Group24','token': 'b8f08d3a-47b2-4238-86bf-a8ed776352c2'}
  	}
  	return this.http.get("http://techtrek-api-gateway.ap-southeast-1.elasticbeanstalk.com/customers/2/details", httpOptions)
  }

}
