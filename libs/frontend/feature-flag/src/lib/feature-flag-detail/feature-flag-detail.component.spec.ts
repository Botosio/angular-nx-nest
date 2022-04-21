import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureFlagDetailComponent } from './feature-flag-detail.component';

describe('FeatureFlagDetailComponent', () => {
  let component: FeatureFlagDetailComponent;
  let fixture: ComponentFixture<FeatureFlagDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureFlagDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureFlagDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
