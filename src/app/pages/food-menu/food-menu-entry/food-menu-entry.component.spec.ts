import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodMenuEntryComponent } from './food-menu-entry.component';

describe('FoodMenuEntryComponent', () => {
  let component: FoodMenuEntryComponent;
  let fixture: ComponentFixture<FoodMenuEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodMenuEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodMenuEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
