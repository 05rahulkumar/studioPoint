import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalaryBladeComponent } from './galary-blade.component';

describe('GalaryBladeComponent', () => {
  let component: GalaryBladeComponent;
  let fixture: ComponentFixture<GalaryBladeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalaryBladeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalaryBladeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
