import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { ProfileComponent } from "./profile/profile.component";
import { LoginComponent } from "./login/login.component";
import { AuthService } from "./services/auth.service";
import { RegisterComponent } from "./register/register.component";
import { LogoutComponent } from "./logout/logout.component";
import { BookDetailComponent } from "./book/book-detail/book-detail.component";
import { CreateBooksComponent } from "./book/create-books/create-books.component";
import { EditBookComponent } from "./book/edit-book/edit-book.component";
import { ListOrderComponent } from "./order/list-order/list-order.component";

export const APP_ROUTER : Routes = [
   { path: '', component: HomeComponent },
   { path: 'profile', component: ProfileComponent, canActivate: [AuthService] },
   { path: 'login', component: LoginComponent },
   { path: 'register', component: RegisterComponent},
   { path: 'logout', component: LogoutComponent },
   { path: 'details/:id', component: BookDetailComponent },
   { path: 'books', component: CreateBooksComponent },
   { path: 'books/:id', component: EditBookComponent },
   { path: 'orders', component: ListOrderComponent }


]

export const RoutingModule : ModuleWithProviders = RouterModule.forRoot(APP_ROUTER)