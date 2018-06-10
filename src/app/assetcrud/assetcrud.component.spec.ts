import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetcrudComponent } from './assetcrud.component';

describe('AssetcrudComponent', () => {
  let component: AssetcrudComponent;
  let fixture: ComponentFixture<AssetcrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetcrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetcrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
