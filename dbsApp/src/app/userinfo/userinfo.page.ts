import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.page.html',
  styleUrls: ['./userinfo.page.scss'],
})
export class UserinfoPage implements OnInit {

	userDetails:any = {}
	userBalance:any = {}
	userAccount:any = {}

  	constructor(private apiService:ApiService, private storage:Storage) {

  	}

  	ngOnInit() {
  		this.getCustDetails()
  	}

  	getCustDetails() {
  		this.storage.get("userInfo").then(userInfo => {
  			this.apiService.getCustomerDetails(userInfo.customerId).subscribe(data => {
  				this.userDetails = data
  				this.getAccountAPI(data.customerId)
  			})
  		})
  	}

	getAccountAPI(customerId) {
		this.apiService.getAccountList(customerId).subscribe(data => {
			this.storage.set("userAccount", data)
			this.userAccount = data
			this.apiService.getDepositBalance(data.accountId).subscribe(balanceData => {
				this.storage.set("userBalance", balanceData)
				this.userBalance = balanceData
			})
		})
	}  	

}
