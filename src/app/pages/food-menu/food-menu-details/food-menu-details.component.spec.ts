import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodMenuDetailsComponent } from './food-menu-details.component';

describe('FoodMenuDetailsComponent', () => {
  let component: FoodMenuDetailsComponent;
  let fixture: ComponentFixture<FoodMenuDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodMenuDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodMenuDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
