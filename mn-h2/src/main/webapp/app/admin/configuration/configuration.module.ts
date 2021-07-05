import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Mnh2SharedModule } from 'app/shared/shared.module';

import { ConfigurationComponent } from './configuration.component';

import { configurationRoute } from './configuration.route';

import { KeyStartsWith } from './configuration.filter';

@NgModule({
  imports: [Mnh2SharedModule, RouterModule.forChild([configurationRoute])],
  declarations: [ConfigurationComponent, KeyStartsWith],
})
export class ConfigurationModule {}
