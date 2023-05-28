import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-categorie',
  templateUrl: './item-categorie.component.html',
  styleUrls: ['./item-categorie.component.scss']
})
export class ItemCategorieComponent {


  

  @Input() id!: string;
  @Input() name!: string;
  @Input() description!: string;
  @Input() image!: string;

  

 

}
