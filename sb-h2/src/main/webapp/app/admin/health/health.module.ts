import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Sbh2SharedModule } from 'app/shared/shared.module';

import { HealthComponent } from './health.component';
import { HealthModalComponent } from './health-modal.component';

import { healthRoute } from './health.route';

@NgModule({
  imports: [Sbh2SharedModule, RouterModule.forChild([healthRoute])],
  declarations: [HealthComponent, HealthModalComponent],
  entryComponents: [HealthModalComponent],
})
export class HealthModule {}
