import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-slider",
  templateUrl: "./slider.component.html",
  styleUrls: ["./slider.component.scss"],
})
export class SliderComponent {
  sliderlist = [
    "https://img.freepik.com/vetores-gratis/realismo-e-banner-horizontal-desenhado-a-mao_23-2150203461.jpg?w=2000",
    "https://img.freepik.com/vetores-premium/banners-para-promocoes-de-comercio-eletronico-com-o-conceito-de-ilustracao-de-venda-instantanea-no-meio-da-temporada_106954-604.jpg?w=2000",
    "https://st4.depositphotos.com/7341970/22099/v/1600/depositphotos_220992162-stock-illustration-black-friday-promotional-sale-shopping.jpg",
  ];
  sliderIdx:number = 0
  constructor(private router:Router) {
    setInterval(() => {
      this.sliderIdx++;
      if(this.sliderIdx >= (this.sliderlist?.length )) this.sliderIdx=0
    }, 2500); 
  }

  increment(){
    if(this.sliderIdx<this.sliderlist.length-1) this.sliderIdx = this.sliderIdx +1

  }
  decrement(){
    if(this.sliderIdx>0) this.sliderIdx = this.sliderIdx -1
  }



}
