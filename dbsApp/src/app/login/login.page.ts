import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ApiService } from '../api.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


	userData: any = {"username": "", "password": ""}

	constructor(private router: Router, private alertCtrl: AlertController, private apiService: ApiService, private storage: Storage) {
	}

	ngOnInit() { 
	}

	checkIfEmpty() {
		if(this.userData.username == "" || this.userData.password == "") {
			if(this.userData.username == "") {
				this.presentAlert("Please fill in Username field.")
			} else {
				this.presentAlert("Please fill in Password field.")
			}
		
		} else {
			this.getAPI()		
		}
	}

  async presentAlert(alertMsg) {
    const alert = await this.alertCtrl.create({
      header: 'Login Failed',
      subHeader: 'Missing Fields',
      message: alertMsg,
      buttons: ['OK'],
    });

    await alert.present();
  }

  getAPI() {
  	this.apiService.getCustomerID(this.userData.username).subscribe(data => {
  		let newData = JSON.stringify(data)
  		if(data.userName == null) {
  			this.presentAlert("Invalid Login");
  			this.userData.username = "";
  			this.userData.password = "";
  		} else {
  			this.storage.set("userInfo", data)
  			this.router.navigate(['/home'])	
  		}

  	})
  }

}
