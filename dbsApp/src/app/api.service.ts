import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getCustomerID(username: String):Observable<any> {
  	const httpOptions = {
  		headers: {'Access-Control-Allow-Credentials' : "true",
    			  'Access-Control-Allow-Origin':'*',
    			  'Access-Control-Allow-Methods':'GET',
    			  'Access-Control-Allow-Headers':'application/json'}
  	}
  	return this.http.get("http://192.168.43.55:5000/getCustomerId/" + username, httpOptions)
  }

  getCustomerDetails(customerID: String):Observable<any> {
  	const httpOptions = {
  		headers: {'Access-Control-Allow-Credentials' : "true",
    			  'Access-Control-Allow-Origin':'*',
    			  'Access-Control-Allow-Methods':'GET',
    			  'Access-Control-Allow-Headers':'application/json'}
  	}
  	return this.http.get('http://192.168.43.55:5000/getCustomerDetails/' + customerID, httpOptions)
  }

  getDepositBalance(accountID):Observable<any> {
  	const httpOptions = {
  		headers: {'Access-Control-Allow-Credentials' : "true",
    			  'Access-Control-Allow-Origin':'*',
    			  'Access-Control-Allow-Methods':'GET',
    			  'Access-Control-Allow-Headers':'application/json'}
  	}
  	return this.http.get('http://192.168.43.55:5000/getBalance/' + accountID, httpOptions)  	
  }

  getOutstandingBalance(accountID):Observable<any> {
   	const httpOptions = {
  		headers: {'Access-Control-Allow-Credentials' : "true",
    			  'Access-Control-Allow-Origin':'*',
    			  'Access-Control-Allow-Methods':'GET',
    			  'Access-Control-Allow-Headers':'application/json'}
  	}
  	return this.http.get('http://192.168.43.55:5000/getOutstandingBalance/' + accountID, httpOptions) 	
  }

  getAccountList(customerID: int):Observable<any> {
  	const httpOptions = {
  		headers: {'Access-Control-Allow-Credentials' : "true",
    			  'Access-Control-Allow-Origin':'*',
    			  'Access-Control-Allow-Methods':'GET',
    			  'Access-Control-Allow-Headers':'application/json'}
  	}
  	return this.http.get('http://192.168.43.55:5000/getAccountlist/' + customerID, httpOptions)
  }

  getTransactions(accountID: String):Observable<any> {
  	const httpOptions = {
  		headers: {'Access-Control-Allow-Credentials' : "true",
    			  'Access-Control-Allow-Origin':'*',
    			  'Access-Control-Allow-Methods':'GET',
    			  'Access-Control-Allow-Headers':'application/json',
    			  'Content-Type':'application/json'}
  	}
  	return this.http.get('http://192.168.43.55:5000/getTransactionDetails/' + accountID, httpOptions)  	
  }

}
