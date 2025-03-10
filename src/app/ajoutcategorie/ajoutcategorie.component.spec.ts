import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ajoutcategorieComponent } from './ajoutcategorie.component';

describe('ajoutcategorieComponent', () => {
  let component: ajoutcategorieComponent;
  let fixture: ComponentFixture<ajoutcategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ajoutcategorieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ajoutcategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
