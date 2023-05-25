import { Component } from "@angular/core";

@Component({
  selector: "app-categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.scss"],
})
export class CategoriesComponent {
  public categories: Category[] = [
    {
      id: '1',
      name: "Vestuário",
    route:"roupas",
      description: "açklsdjf",
      icon: "checkroom",
      color: "#2a2",
    },
    {
      id: '2',
      name: "Eletrodomesticos",
      route: "eletro",
      description: "açklsdjf",
      icon: "kitchen",
      color: "#2a2a2a",
    },
    {
      id: '3',
      name: "Eletronicos",
      route: "tec",
      description: "açklsdjf",
      icon: "devices",
      color: "#2a2a2a",
    },
    {
      id: '4',
      name: "Móveis",
      route: "moveis",
      description: "açklsdjf",
      icon: "chair",
      color: "#2a2a2a",
    },
    {
      id: '5',
      name: "Saúde",
      route: "saude",
      description: "açklsdjf",
      icon: "monitor_heart",
      color: "#2a2a2a",
    },
    {
      id: '6',
      name: "Bolsas",
      route: "bolsas",
      description: "açklsdjf",
      icon: "shopping_bag",
      color: "light",
    },
    {
      id: '7',
      name: "Acessórios",
      route: "acess",
      description: "açklsdjf",
      icon: "watch",
      color: "Blue",
    },
    {
      id: '8',
      name: "Lazer",
      route: "lazer",
      description: "açklsdjf",
      icon: "sports_basketball",
      color: "red",
    },
  ];
}

class Category {
  id!: string;
  name!: string;
  route!: string;
  description!: string;
  icon!: string;
  color!: string;
}
