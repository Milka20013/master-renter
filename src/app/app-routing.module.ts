import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './pages/welcome-page/welcome.component';
import { LandlordPageComponent } from './pages/main-pages/landlord-page/landlord-page.component';
import { TenantUserPageComponent } from './pages/main-pages/tenant-page/tenant-user-page.component';
import { authenticationGuard } from './pages/welcome-page/authentication/authentication.guard';
import { UserType } from './enums/user-type';
import { ApartmentPageComponent } from './pages/apartment-page/apartment-page.component';
import { BillPageComponent } from './pages/bill-page/bill-page.component';
import { TenantPageComponent } from './pages/tenant-page/tenant-page.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  {
    path: 'landlord',
    component: LandlordPageComponent,
    canActivate: [authenticationGuard(UserType.Landlord)],
  },
  {
    path: 'tenantUser',
    component: TenantUserPageComponent,
    canActivate: [authenticationGuard(UserType.Tenant)],
  },
  {
    path: 'apartment/:id',
    component: ApartmentPageComponent,
    canActivate: [authenticationGuard(UserType.Landlord)],
  },
  {
    path: 'tenant/:id',
    component: TenantPageComponent,
    canActivate: [authenticationGuard(UserType.Landlord)],
  },
  {
    path: 'bill/:id',
    component: BillPageComponent,
    canActivate: [authenticationGuard(UserType.Landlord)],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
