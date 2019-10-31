import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-item-modal',
  templateUrl: './add-item-modal.page.html',
  styleUrls: ['./add-item-modal.page.scss'],
})
export class AddItemModalPage implements OnInit {


  addItemDetails: any = { Description: "", Cost: 0, budgetedExpense: false, budgetedAmount: 0};
  budgetDiff: any = 0;

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  
  }

  isBudgetedExpense() {
  	if(this.addItemDetails.budgetedExpense) {
  		this.addItemDetails.budgetedExpense = false;
  	} else {
  		this.addItemDetails.budgetedExpense = true;
  	}
  }

  calculateDiff(costPrice, budgetedAmt) {
  	this.budgetDiff = budgetedAmt - costPrice;
  }

  closeAddItemModal() {
  	this.modalController.dismiss({
  		'dimissed': true
  	});
  }

}
