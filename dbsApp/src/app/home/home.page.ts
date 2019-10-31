import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';
import { ApiService } from '../api.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

@ViewChild("doughnutCanvas", {read: ElementRef, static:false}) doughnutCanvas: ElementRef;
	constructor(private apiService: ApiService, private storage: Storage) { }

	private doughnutChart: Chart;

	userInfo: any = {'customerId': "", 'userName': ""};
	userBalance: any = {}
	userTransaction: any = {}

  	ngAfterViewInit() {

  		this.storage.get("userInfo").then(data => {
  			this.userInfo.customerId = data.customerId;
  			this.userInfo.userName = data.userName;
  			this.getAccountAPI(data.customerId);
  			this.storage.get("userAccount").then(userdata => {
  				this.getTransactions(userdata.accountId);
  			})
  			
  		})

		this.getDonut();
  	}

  	ngOnInit() {
  	}

	getDonut() {
		this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
	  	type: "doughnut",
	  	data: {
	    	labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
	    	datasets: [
	    		{
	    			label: "# of Votes",
	        		data: [12, 19, 3, 5, 2, 3],
	        		backgroundColor: [
	          		"rgba(255, 99, 132, 0.2)",
	          		"rgba(54, 162, 235, 0.2)",
	          		"rgba(255, 206, 86, 0.2)",
	          		"rgba(75, 192, 192, 0.2)",
	          		"rgba(153, 102, 255, 0.2)",
	          		"rgba(255, 159, 64, 0.2)"
	        		],
	        		hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#FF6384", "#36A2EB", "#FFCE56"]
	     		}
	    	]}
		});
	}

	getAccountAPI(customerId) {
		this.apiService.getAccountList(customerId).subscribe(data => {
			this.storage.set("userAccount", data)
			this.apiService.getDepositBalance(data.accountId).subscribe(balanceData => {
				this.storage.set("userBalance", balanceData)
				this.userBalance = balanceData
			})
		})
	}

	getTransactions(accountId) {
		this.apiService.getTransactions(accountId).subscribe(data => {
			this.userTransaction = data
		})
	}

}
