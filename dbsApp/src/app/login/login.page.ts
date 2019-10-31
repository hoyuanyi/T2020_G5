import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


	userData: any = {"username": "", "password": ""}

	constructor(private router: Router, private alertCtrl: AlertController) {
	}

	ngOnInit() { }

	checkIfEmpty() {
		if(this.userData.username == "" || this.userData.password == "") {
			if(this.userData.username == "") {
				this.presentAlert("Username field.")
			} else {
				this.presentAlert("Password field.")
			}
		
		} else {
			this.router.navigate(['/home'])
		}
	}

  async presentAlert(alertMsg) {
    const alert = await this.alertCtrl.create({
      header: 'Login Failed',
      subHeader: 'Missing Fields',
      message: 'Please fill in ' + alertMsg,
      buttons: ['OK'],
    });

    await alert.present();
  }	

}
