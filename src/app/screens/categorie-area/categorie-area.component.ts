import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categorie-area',
  templateUrl: './categorie-area.component.html',
  styleUrls: ['./categorie-area.component.scss']
})
export class CategorieAreaComponent {
  id!: string | null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);}
}
