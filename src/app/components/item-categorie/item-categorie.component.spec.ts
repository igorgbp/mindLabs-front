import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCategorieComponent } from './item-categorie.component';

describe('ItemCategorieComponent', () => {
  let component: ItemCategorieComponent;
  let fixture: ComponentFixture<ItemCategorieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemCategorieComponent]
    });
    fixture = TestBed.createComponent(ItemCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
