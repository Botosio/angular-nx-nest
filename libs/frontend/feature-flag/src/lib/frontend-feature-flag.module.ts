import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { FeatureFlagListComponent } from './feature-flag-list/feature-flag-list.component';
import { FeatureFlagDetailComponent } from './feature-flag-detail/feature-flag-detail.component';

export const frontendFeatureFlagRoutes: Route[] = [];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    FeatureFlagListComponent,
    FeatureFlagDetailComponent
  ],
  exports: [
    FeatureFlagListComponent,
    FeatureFlagDetailComponent
  ],
})
export class FrontendFeatureFlagModule {}
