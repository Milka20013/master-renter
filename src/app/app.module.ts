import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './pages/welcome-page/welcome.component';
import { AuthenticationComponent } from './pages/welcome-page/authentication/authentication.component';
import { LoginComponent } from './pages/welcome-page/authentication/login/login.component';
import { SignUpComponent } from './pages/welcome-page/authentication/sign-up/sign-up.component';
import { LandlordPageComponent } from './pages/main-pages/landlord-page/landlord-page.component';
import { TenantPageComponent } from './pages/main-pages/tenant-page/tenant-page.component';
import { LandlordHeaderComponent } from './pages/main-pages/landlord-page/header/landlord-header.component';
import { ApartmentMenuComponent } from './pages/main-pages/landlord-page/menus/apartment/apartment-menu.component';
import { TenantMenuComponent } from './pages/main-pages/landlord-page/menus/tenant/tenant-menu.component';
import { BillMenuComponent } from './pages/main-pages/landlord-page/menus/bill/bill-menu.component';
import { MaterialDatePicker } from './material-ui/date-picker/material-date-picker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialButton } from './material-ui/button/material-button';
import { MaterialInput } from './material-ui/input/material-input';
import { MaterialSelect } from './material-ui/select/material-select';
import { MaterialTable } from './material-ui/table/material-table';
import { ApartmentPageComponent } from './pages/apartment-page/apartment-page.component';
import { BillPageComponent } from './pages/bill-page/bill-page.component';
import { ApartmentSelectorComponent } from './ui-utils/selectors/apartment-selector/apartment-selector.component';
import { BillStatusSelectorComponent } from './ui-utils/selectors/bill-selector/status/bill-status-selector.component';
import { BillTypeSelectorComponent } from './ui-utils/selectors/bill-selector/type/bill-type-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AuthenticationComponent,
    LoginComponent,
    SignUpComponent,
    LandlordPageComponent,
    TenantPageComponent,
    LandlordHeaderComponent,
    TenantMenuComponent,
    ApartmentMenuComponent,
    BillMenuComponent,
    ApartmentPageComponent,
    TenantPageComponent,
    BillPageComponent,
    ApartmentSelectorComponent,
    BillStatusSelectorComponent,
    BillTypeSelectorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialDatePicker,
    MaterialButton,
    MaterialInput,
    MaterialSelect,
    MaterialTable,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
