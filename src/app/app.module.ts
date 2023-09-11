import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FetchedUserComponent } from './fetched-user/fetched-user.component';
import { WeatherComponent } from './weather/weather.component';
import { SavedUserComponent } from './saved-user/saved-user.component';

@NgModule({
  declarations: [
    AppComponent,
    FetchedUserComponent,
    WeatherComponent,
    SavedUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
