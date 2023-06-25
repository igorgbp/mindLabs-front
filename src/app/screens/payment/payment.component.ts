import { Component } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {
  visiblePix:boolean = false;


  changeVisiblePix(){
    console.log('asdfç')
    return this.visiblePix = true
  }
}
