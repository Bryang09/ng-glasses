import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { HeroComponent } from './landing/hero/hero.component';
import { Section1Component } from './landing/section1/section1.component';
import { Section2Component } from './landing/section2/section2.component';
import { Section3Component } from './landing/section3/section3.component';
import { FooterComponent } from './landing/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HeroComponent,
    Section1Component,
    Section2Component,
    Section3Component,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
