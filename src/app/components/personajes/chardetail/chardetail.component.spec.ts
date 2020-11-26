import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChardetailComponent } from './chardetail.component';

describe('ChardetailComponent', () => {
  let component: ChardetailComponent;
  let fixture: ComponentFixture<ChardetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChardetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChardetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
