import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './pages/welcome-page/welcome/welcome.component';
import { SignInComponent } from './pages/sign-in-page/sign-in/sign-in.component';

@NgModule({
  declarations: [AppComponent, WelcomeComponent, SignInComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
