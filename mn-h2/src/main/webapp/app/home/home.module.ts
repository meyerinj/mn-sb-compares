import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Mnh2SharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [Mnh2SharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent],
})
export class Mnh2HomeModule {}
