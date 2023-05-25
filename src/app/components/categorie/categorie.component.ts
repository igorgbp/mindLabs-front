import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.scss']
})
export class CategorieComponent {
  
  @Input() id!: string;
  @Input() name!: string;
  @Input() route!: string;
  @Input() description!: string;
  @Input() icon!: string;
  @Input() color!: string;


}
