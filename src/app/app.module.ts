import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SafePipe } from './safe-pipe';

import { routing } from './routing';
import { HttpClientModule } from '@angular/common/http';
import { GlobalLoginGuard } from './global-login-guard';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { BodyReplayComponent } from './body-replay/body-replay.component';
import { BodyOnliveComponent } from './body-onlive/body-onlive.component';
import { BodyReservedComponent } from './body-reserved/body-reserved.component';
import { BodyAnyFeedComponent } from './body-any-feed/body-any-feed.component';
import { WidgetFeedItemComponent } from './widget-feed-item/widget-feed-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    BodyReplayComponent,
    BodyOnliveComponent,
    BodyReservedComponent,
    BodyAnyFeedComponent,
    WidgetFeedItemComponent,
    SafePipe
  ], 
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule,
  ],
  providers: [GlobalLoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
