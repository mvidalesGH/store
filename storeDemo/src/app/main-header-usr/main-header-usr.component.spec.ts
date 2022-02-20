import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainHeaderUsrComponent } from './main-header-usr.component';

describe('MainHeaderUsrComponent', () => {
  let component: MainHeaderUsrComponent;
  let fixture: ComponentFixture<MainHeaderUsrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainHeaderUsrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainHeaderUsrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
