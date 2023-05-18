import { Component } from "@angular/core";

@Component({
  selector: "app-categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.scss"],
})
export class CategoriesComponent {
  public categories: Category[] = [
    {
      id: 1,
      name: "Fruits",
      description: "açklsdjf",
      icon: "../../../assets/logo.png",
      color: "#2a2",
    },
    {
      id: 2,
      name: "Fruits",
      description: "açklsdjf",
      icon: "",
      color: "#2a2a2a",
    },
    {
      id: 3,
      name: "Móveis",
      description: "açklsdjf",
      icon: "chair",
      color: "#2a2a2a",
    },
    {
      id: 3,
      name: "Móveis",
      description: "açklsdjf",
      icon: "chair",
      color: "#2a2a2a",
    },
    {
      id: 3,
      name: "Móveis",
      description: "açklsdjf",
      icon: "chair",
      color: "#2a2a2a",
    },
    {
      id: 3,
      name: "Móveis",
      description: "açklsdjf",
      icon: "chair",
      color: "light",
    },
    {
      id: 3,
      name: "Móveis",
      description: "açklsdjf",
      icon: "chair",
      color: "Blue",
    },
    {
      id: 3,
      name: "Móveis",
      description: "açklsdjf",
      icon: "cake",
      color: "red",
    },
  ];
}

class Category {
  id!: number;
  name!: string;
  description!: string;
  icon!: string;
  color!: string;
}
