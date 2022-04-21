import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'angular-nx-nest-feature-flag-list',
  templateUrl: './feature-flag-list.component.html',
  styleUrls: ['./feature-flag-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeatureFlagListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
