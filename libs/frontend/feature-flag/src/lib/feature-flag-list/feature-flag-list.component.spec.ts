import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureFlagListComponent } from './feature-flag-list.component';

describe('FeatureFlagListComponent', () => {
  let component: FeatureFlagListComponent;
  let fixture: ComponentFixture<FeatureFlagListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureFlagListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureFlagListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
