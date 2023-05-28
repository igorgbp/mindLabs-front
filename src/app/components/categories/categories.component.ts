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
      name: "Notebooks",
      description: "açklsdjf",
      image: "../../../assets/cat/note.png",
    },
    {
      id: '2',
      name: "Desktop",
      description: "açklsdjf",
      image: "../../../assets/cat/desktop.png",
    },
    {
      id: '3',
      name: "Headphones",
      description: "açklsdjf",
      image: "../../../assets/cat/headphone.png",
    },
    {
      id: '4',
      name: "Mouses",
      description: "açklsdjf",
      image: "../../../assets/cat/mouse.png",
    },
    {
      id: '5',
      name: "Teclados",
      description: "açklsdjf",
      image: "../../../assets/cat/keyboard.png",
    },
    {
      id: '6',
      name: "Smartphones",
      description: "açklsdjf",
      image: "../../../assets/cat/smartphone.png",
    },
    {
      id: '7',
      name: "Monitores",
      description: "açklsdjf",
      image: "../../../assets/cat/monitor.png",
    },
    {
      id: '8',
      name: "Consoles",
      description: "açklsdjf",
      image: "../../../assets/cat/console.png",
    },
  ];
}

class Category {
  id!: string;
  name!: string;
  description!: string;
  image!: string;
}
