import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'angular-nx-nest-feature-flag-detail',
  templateUrl: './feature-flag-detail.component.html',
  styleUrls: ['./feature-flag-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeatureFlagDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
