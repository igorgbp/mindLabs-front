import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieAreaComponent } from './categorie-area.component';

describe('CategorieAreaComponent', () => {
  let component: CategorieAreaComponent;
  let fixture: ComponentFixture<CategorieAreaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategorieAreaComponent]
    });
    fixture = TestBed.createComponent(CategorieAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
