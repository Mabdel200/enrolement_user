
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';

import { FullComponent } from './layouts/full/full.component';
import { AppHeaderComponent } from './layouts/full/header/header.component';
import { AppSidebarComponent } from './layouts/full/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './demo-material-module';

import { SharedModule } from './shared/shared.module';
import { SpinnerComponent } from './shared/spinner.component';
// Authentification.
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
//Admin Panel
import { CustomerComponent } from './pages/customer/customer.component';
import { HeaderCustomerComponent } from './pages/customer/header-customer/header-customer.component';
import { SidebarCustomerComponent } from './pages/customer/sidebar-customer/sidebar-customer.component';
import { FullCustomerComponent } from './pages/customer/full-customer.component';
// User
import { PreEnrollementComponent } from './pages/pre-enrollement/pre-enrollement.component';

@NgModule({
  declarations: [
   
    SpinnerComponent,
    AppComponent,
    FullComponent,
    AppHeaderComponent,
    SpinnerComponent,
    // Fr Authenticator.
    LoginComponent,
    RegisterComponent,
    WelcomeComponent,
    PreEnrollementComponent,
    // For Admin Panel
    CustomerComponent,
    HeaderCustomerComponent,
    SidebarCustomerComponent,
    FullCustomerComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    RouterModule.forRoot(AppRoutes),
    AppSidebarComponent
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
