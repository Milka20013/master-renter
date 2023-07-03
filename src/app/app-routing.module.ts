import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './pages/welcome-page/welcome.component';
import { LandlordComponent } from './pages/main-pages/landlord-page/landlord.component';
import { TenantComponent } from './pages/main-pages/tenant-page/tenant.component';
import { authenticationGuard } from './pages/welcome-page/authentication/authentication.guard';
import { UserType } from './enums/user-type';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  {
    path: 'landlord',
    component: LandlordComponent,
    canActivate: [authenticationGuard(UserType.Landlord)],
  },
  {
    path: 'tenant',
    component: TenantComponent,
    canActivate: [authenticationGuard(UserType.Tenant)],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
