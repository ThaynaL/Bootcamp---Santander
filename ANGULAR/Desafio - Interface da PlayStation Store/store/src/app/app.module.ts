import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { CardComponent } from './components/card/card.component';
import { CardLabelComponent } from './components/card/card-label/card-label.component';
import { CardPrecoComponent } from './components/card/card-preco/card-preco.component';
import { MenuBarItemComponent } from './components/menu-bar/menu-bar-item/menu-bar-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuBarComponent,
    CardComponent,
    CardLabelComponent,
    CardPrecoComponent,
    MenuBarItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
