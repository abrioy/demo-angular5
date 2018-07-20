import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodMenuCreateFormComponent } from './food-menu-create-form.component';

describe('FoodMenuCreateFormComponent', () => {
  let component: FoodMenuCreateFormComponent;
  let fixture: ComponentFixture<FoodMenuCreateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodMenuCreateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodMenuCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
