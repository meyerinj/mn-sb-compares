import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { Mnh2SharedModule } from 'app/shared/shared.module';
import { Mnh2CoreModule } from 'app/core/core.module';
import { Mnh2AppRoutingModule } from './app-routing.module';
import { Mnh2HomeModule } from './home/home.module';
import { Mnh2EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    Mnh2SharedModule,
    Mnh2CoreModule,
    Mnh2HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    Mnh2EntityModule,
    Mnh2AppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class Mnh2AppModule {}
