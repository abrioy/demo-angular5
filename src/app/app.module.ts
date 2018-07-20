import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


import {AppComponent} from './app.component';
import {RegistrationFormComponent} from './pages/registration-form/registration-form.component';
import {SharedModule} from './component/shared.module';
import {MainMenuModule} from "./layout/main-menu/main-menu.module";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from './pages/home/home.component';
import {LoginFormComponent} from './pages/login-form/login-form.component';
import {ContactComponent} from './pages/contact/contact.component';
import {FooterModule} from "./layout/footer/footer.module";
import {HomeModule} from "./pages/home/home.module";
import {ConfigService} from "./services/config.service";
import {SettingsComponent} from './pages/settings/settings.component';
import {SettingsModule} from "./pages/settings/settings.module";
import {FoodMenuModule} from "./pages/food-menu/food-menu.module";
import {FoodMenuComponent} from './pages/food-menu/food-menu.component';
import {FoodItemService} from "./services/food-item.service";
import {AuthService} from "./auth/auth.service";
import {AuthModule} from "./auth/auth.module";
import { LogoutComponent } from './auth/logout/logout.component';

const appRoutes: Routes = [
  {
    path: 'logout',
    component: LogoutComponent,
    canActivate: [AuthService],
  },
  {
    path: 'register',
    component: RegistrationFormComponent,
    canActivate: [AuthService],
  },
  {
    path: 'login',
    component: LoginFormComponent,
    pathMatch: 'full',
    canActivate: [AuthService],
  },
  {
    path: 'contact',
    component: ContactComponent,
    pathMatch: 'full',
    canActivate: [AuthService],
  },
  {
    path: 'settings',
    component: SettingsComponent,
    pathMatch: 'full',
    canActivate: [AuthService],
  },
  {
    path: 'menu',
    component: FoodMenuComponent,
    pathMatch: 'full',
    canActivate: [AuthService],
  },
  {
    path: 'menu/:foodId',
    component: FoodMenuComponent,
    pathMatch: 'full',
    canActivate: [AuthService],
  },
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full',
    canActivate: [AuthService],
  },
  {
    path: '**',
    redirectTo: '/home',
  }
];

@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    LoginFormComponent,
    ContactComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      //{ enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AuthModule,
    MainMenuModule,
    FooterModule,
    HomeModule,
    SettingsModule,
    FoodMenuModule
  ],
  exports: [],
  providers: [
    ConfigService,
    FoodItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
