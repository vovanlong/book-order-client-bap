import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RoutingModule } from './app.routing';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './services/login.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { RegisterComponent } from './register/register.component';
import { RegisterService } from './services/register.service';
import { BookComponent } from './book/book.component';
import { BookDetailComponent } from './book/book-detail/book-detail.component';
import { BookService } from './services/book.service';
import { LogoutComponent } from './logout/logout.component';
import { CreateBooksComponent } from './book/create-books/create-books.component';
import { EditBookComponent } from './book/edit-book/edit-book.component';
import { HeaderComponent } from './home/header/header.component';
import { CartBookComponent } from './book/book-detail/cart-book/cart-book.component';
import { OrderService } from './services/order.service';
import { OrderComponent } from './order/order.component';
import { ListOrderComponent } from './order/list-order/list-order.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    BookComponent,
    BookDetailComponent,
    LogoutComponent,
    CreateBooksComponent,
    EditBookComponent,
    HeaderComponent,
    CartBookComponent,
    OrderComponent,
    ListOrderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [LoginService, AuthService, RegisterService, BookService, OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
