import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { StaticComponentComponent } from './components/static-component/static-component.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import {routes} from '../app/router/routes';
import { SpeakerCardComponent } from './components/speaker-card/speaker-card.component';
import { ButtonComponent } from './reusable-components/button/button.component';
import { TextContentComponent } from './reusable-components/text-content/text-content.component';

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
    TextContentComponent
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
