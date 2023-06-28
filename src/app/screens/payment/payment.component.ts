import { Component } from "@angular/core";
import { Address, UserLogged } from "src/app/models/user";
import { Transaction } from "src/app/models/payment";

import { UserService } from "src/app/services/user.service";
import { PaymentService } from "src/app/services/payment.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-payment",
  templateUrl: "./payment.component.html",
  styleUrls: ["./payment.component.scss"],
})
export class PaymentComponent {
  visiblePix: boolean = false;
  user!: UserLogged;
  addressList!: Address[];
  qrCode!: string;
  newAddressVisible: boolean = false;
  addressListVisible: boolean = true;
  selectedAddress!: Address;
  newAddress!: Address;
  street?: string;
  number?: number;
  neighborhood?: string;
  city?: string;
  state?: string;
  complement?: string;
  colorAddressItem!:string;
  errorPixVisible:boolean = false;
  constructor(
    private userService: UserService,
    private paymentService: PaymentService,
    private router:Router
  ) {
    // if(!localStorage.getItem('user')){
    //   this.router.navigate([''])
    
    // }
    console.log(JSON.parse(localStorage.getItem("user")!)[0])
    this.user = JSON.parse(localStorage.getItem("user")!)[0];
    
  }
  ngOnInit() {
    console.log('init', this.user)
    this.listAddress();
   
  }
  selectAddress(address:Address){
    console.log(address)
    this.selectedAddress = address;
    
  }

  listAddress() {
    this.userService.listUserAddress().subscribe(
      (data) => {
        this.addressList = data;
        console.log(data);
        if (data.length == 0) {
          this.addressListVisible = false;
          this.newAddressVisible = true;
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }
  cadAddress() {
    this.newAddress = {
      number: this.number,
      street: this.street,
      neighborhood: this.neighborhood,
      city: this.city,
      state: this.state,
      complement: this.complement,
    };
    this.userService.cadAddress(parseInt(this.user.id!), this.newAddress).subscribe(
      (data) => {
        console.log(data);
        console.log("deu bom ");
        this.addressListVisible = true
        this.listAddress()
      },
      (error) => {
        console.error(error);
      }
    );
  }

  removeAddress(idAddress:number){
    console.log('inside remove address')
    this.userService.rmAddress(idAddress).subscribe(
      (data) => {
        // console.log(data);
        console.log("deu bom ");
        this.listAddress()
      },
      (error) => {
        console.error(error);
      }
    );
  }
  generatePixQr() {
    console.log("fasdf");
    this.visiblePix = true;
    console.log('cpf', this.user.cpf)
    const transaction: Transaction = {
      transaction_amount: 10,
      description: "asdf",
      payment_method_id: "pix",
      payer: {
        email: this.user.email!,
        first_name: this.user.first_name!,
        last_name: this.user.last_name!,
        identification: {
          type: "CPF",
          // number: this.user.cpf!.toString(),
          number:this.user.cpf!
        },
        address: {
          city: this.selectedAddress.city!,
          neighborhood: this.selectedAddress.neighborhood!,
          federal_unit: "MG",
          street_name: this.selectedAddress.street!,
          street_number: this.selectedAddress.number!.toString(),
          zip_code: "39735000",
        },
      },
    };
    console.log('baguvix', transaction)
    this.paymentService.Payment(transaction).subscribe(
      (data) => {
        let result = JSON.stringify(data);
        console.log(result)
        this.qrCode =
          data["point_of_interaction"]["transaction_data"]["qr_code_base64"];
      },
      (error) => {
        console.error(error);
        this.errorPixVisible  = true;
      }
    );
  }
}
