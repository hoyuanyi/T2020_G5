import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddItemModalPage } from '../add-item-modal/add-item-modal.page';

@Component({
  selector: 'app-add-claim-page',
  templateUrl: './add-claim-page.page.html',
  styleUrls: ['./add-claim-page.page.scss'],
})
export class AddClaimPagePage implements OnInit {

  hideInitialDetails: boolean = false;
	claimDetails: any = { Purpose: "", Date: "", Requestor: "", Ministry: ""};


	constructor(public modalController: ModalController) {
  
  }

  ngOnInit() {
  
  }

  proceedNext() {
  	this.hideInitialDetails = true;
  	alert(JSON.stringify(this.claimDetails));
  }

  loadInitialDetails() {
    this.hideInitialDetails = false;
  }

  async showAddItemModal() {
    const modal = await this.modalController.create({
      component: AddItemModalPage
    });
    return await modal.present();
  }    

}
