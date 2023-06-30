import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './pages/welcome-page/welcome.component';
import { AuthenticationComponent } from './pages/welcome-page/authentication/authentication.component';
import { LoginComponent } from './pages/welcome-page/authentication/login/login.component';
import { SignUpComponent } from './pages/welcome-page/authentication/sign-up/sign-up.component';
import { LandlordComponent } from './pages/main-pages/landlord-page/landlord.component';
import { TenantComponent } from './pages/main-pages/tenant-page/tenant.component';
import { LandlordHeaderComponent } from './pages/main-pages/landlord-page/header/landlord-header.component';
import { ApartmentMenuComponent } from './pages/main-pages/landlord-page/menus/apartment/apartment-menu.component';
import { TenantMenuComponent } from './pages/main-pages/landlord-page/menus/tenant/tenant-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AuthenticationComponent,
    LoginComponent,
    SignUpComponent,
    LandlordComponent,
    TenantComponent,
    LandlordHeaderComponent,
    TenantMenuComponent,
    ApartmentMenuComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
