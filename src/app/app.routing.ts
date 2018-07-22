import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { ProfileComponent } from "./profile/profile.component";
import { LoginComponent } from "./login/login.component";
import { AuthService } from "./services/auth.service";
import { RegisterComponent } from "./register/register.component";

export const APP_ROUTER : Routes = [
   { path: '', component: HomeComponent },
   { path: 'profile', component: ProfileComponent, canActivate: [AuthService] },
   { path: 'login', component: LoginComponent },
   { path: 'register', component: RegisterComponent}

]

export const RoutingModule : ModuleWithProviders = RouterModule.forRoot(APP_ROUTER)