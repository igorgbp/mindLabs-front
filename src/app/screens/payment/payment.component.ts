import { Component } from "@angular/core";
import { AddressList, UserLogged } from "src/app/models/user";
import { Transaction } from "src/app/models/payment";

import { UserService } from "src/app/services/user.service";
import { PaymentService } from "src/app/services/payment.service";
@Component({
  selector: "app-payment",
  templateUrl: "./payment.component.html",
  styleUrls: ["./payment.component.scss"],
})
export class PaymentComponent {
  visiblePix: boolean = false;
  user!: UserLogged;
  addressList!: AddressList;
  qrCode!:string;
  constructor(private userService: UserService, private paymentService:PaymentService) {
    this.user = JSON.parse(localStorage.getItem("user")!)[0];
  }
  ngOnInit() {
    console.log("onint");
    let id = parseInt(this.user.id!);
    console.log(id);
    this.userService.listUserAddress(id).subscribe(
      (data) => {
        this.addressList = data;
        console.log(data);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  // generatePixQr(transaction:Transaction){
  //   this.visiblePix = true
  // }
  generatePixQr() {
    console.log("fasdf");
    this.visiblePix = true;
    const transaction: Transaction = {
      transaction_amount: 10,
      description: "asdf",
      payment_method_id: "pix",
      payer: {
        email: "bruninhadivinolandia@gmail.com",
        first_name: "Bruna",
        last_name: "dfg",
        identification: {
          type: "CPF",
         number: "19119119100"
        },
        address: {
          city: "Divinolandia",
          neighborhood: "Centro",
          federal_unit: "MG",
          street_name: "RUa da bruninha",
          street_number: "69",
          zip_code: "39735000",
        },
      },
    };

    this.paymentService.Payment(transaction).subscribe(
      (data) => {
      //   localStorage.setItem("user", JSON.stringify(data));
      //   localStorage.setItem("carrinho", "");
        // console.log("data:",data);
       let  result = JSON.stringify(data)
        this.qrCode=data['point_of_interaction']['transaction_data']['qr_code_base64']
        // this.router.navigate(["/home"]);
        // this.validCredentials = true;
      },
      (error) => {
        console.error(error);
        // this.validCredentials = false;
      }
    );
  }

  // generatePaymentQR()

  // listUserAddress(){

  //   console.log('listuser')
  //     console.log(id)
  //   // let address:AddressList=  thies.userService.listUserAddress(id);

  //   this.userService.listUserAddress(id).subscribe(
  //     (data) => {
  //       this.addressList = data;
  //       console.log(data);
  //     },
  //     (error) => {
  //       console.error(error);
  //     }
  //   );
  //   console.log(this.addressList)

  // }
}
