import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodMenuListComponent } from './food-menu-list.component';

describe('FoodMenuListComponent', () => {
  let component: FoodMenuListComponent;
  let fixture: ComponentFixture<FoodMenuListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodMenuListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodMenuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
