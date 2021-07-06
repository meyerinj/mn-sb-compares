import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { Sbh2SharedModule } from 'app/shared/shared.module';
import { Sbh2CoreModule } from 'app/core/core.module';
import { Sbh2AppRoutingModule } from './app-routing.module';
import { Sbh2HomeModule } from './home/home.module';
import { Sbh2EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    Sbh2SharedModule,
    Sbh2CoreModule,
    Sbh2HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    Sbh2EntityModule,
    Sbh2AppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class Sbh2AppModule {}
