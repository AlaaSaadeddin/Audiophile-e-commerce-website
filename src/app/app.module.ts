import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import {MaterialModule} from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {routes} from '../app/router/routes';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { StaticComponentComponent } from './components/static-component/static-component.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SpeakerCardComponent } from './components/speaker-card/speaker-card.component';
import { ButtonComponent } from './reusable-components/button/button.component';
import { TextContentComponent } from './reusable-components/text-content/text-content.component';
import { ProductsCardComponent } from './reusable-components/products-card/products-card.component';
import { HeadphonesPageComponent } from './pages/headphones-page/headphones-page.component';
import { CategoryHeaderComponent } from './components/category-header/category-header.component';
import { SpeakersPageComponent } from './pages/speakers-page/speakers-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SideMenuComponent,
    CategoryCardComponent,
    ProductCardComponent,
    StaticComponentComponent,
    FooterComponent,
    HomePageComponent,
    SpeakerCardComponent,
    ButtonComponent,
    TextContentComponent,
    ProductsCardComponent,
    HeadphonesPageComponent,
    CategoryHeaderComponent,
    SpeakersPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
