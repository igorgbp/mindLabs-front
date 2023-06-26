import { Component } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {
  visiblePix:boolean = false;
  constructor(){}


  // generatePixQr(transaction:Transaction){
  //   this.visiblePix = true
  // }
  generatePixQr(){
    this.visiblePix = true
  }
}


class Transaction {
  transaction_amount: number;
  description: string;
  payment_method_id: string;
  payer: Payer;

  constructor(
    transaction_amount: number,
    description: string,
    payment_method_id: string,
    payer: Payer
  ) {
    this.transaction_amount = transaction_amount;
    this.description = description;
    this.payment_method_id = payment_method_id;
    this.payer = payer;
  }
}

class Payer {
  email: string;
  first_name: string;
  last_name: string;
  identification: Identification;
  address: Address;

  constructor(
    email: string,
    first_name: string,
    last_name: string,
    identification: Identification,
    address: Address
  ) {
    this.email = email;
    this.first_name = first_name;
    this.last_name = last_name;
    this.identification = identification;
    this.address = address;
  }
}

class Identification {
  type: string;
  number: string;

  constructor(type: string, number: string) {
    this.type = type;
    this.number = number;
  }
}

class Address {
  zip_code: string;
  street_name: string;
  street_number: string;
  neighborhood: string;
  city: string;
  federal_unit: string;

  constructor(
    zip_code: string,
    street_name: string,
    street_number: string,
    neighborhood: string,
    city: string,
    federal_unit: string
  ) {
    this.zip_code = zip_code;
    this.street_name = street_name;
    this.street_number = street_number;
    this.neighborhood = neighborhood;
    this.city = city;
    this.federal_unit = federal_unit;
  }
}