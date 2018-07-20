import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBarLoginComponent } from './menu-bar-login.component';

describe('MenuBarLoginComponent', () => {
  let component: MenuBarLoginComponent;
  let fixture: ComponentFixture<MenuBarLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuBarLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuBarLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
