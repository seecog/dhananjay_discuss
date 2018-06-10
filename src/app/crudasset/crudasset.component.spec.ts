import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudassetComponent } from './crudasset.component';

describe('CrudassetComponent', () => {
  let component: CrudassetComponent;
  let fixture: ComponentFixture<CrudassetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudassetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudassetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
