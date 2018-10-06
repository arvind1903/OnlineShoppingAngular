import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Router, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './Component/login/login.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './services/login.service';
import { HttpClientModule } from '@angular/common/http';
import { Http, HttpModule } from '@angular/http';
import { SignUpComponent } from './Component/sign-up/sign-up.component';
import { PagenotfoundComponent } from './Component/pagenotfound/pagenotfound.component';
import { HomeComponent } from './Component/home/home.component';
import { ToastrModule } from 'ngx-toastr';
import { SidebarComponent } from './Component/sidebar/sidebar.component';
import { AddtocartComponent } from './Component/addtocart/addtocart.component';
import { DataTableModule } from 'angular-datatables';
import { PaymentComponent } from './Component/payment/payment.component';
import { FirstPageComponent } from './Component/first-page/first-page.component';
import { ForgotpasswordComponent } from './Component/forgotpassword/forgotpassword.component';
import { CategoryService } from './services/category.service';
import { AddProductComponent } from './Component/add-product/add-product.component';
import { ProductServicesService } from './services/product-services.service';
const angRoutes : Routes = [ 
  { path : "" , redirectTo : 'login', pathMatch : "full"},
  { path : "login" , component : LoginComponent},
  { path : "signUpCom" , component : SignUpComponent},
  { path : "home" , component : HomeComponent},
  { path : "addToCart" ,component : AddtocartComponent},
  { path : "payment" , component : PaymentComponent},
  { path : "firstPage" ,component:FirstPageComponent},
  { path : "forgotPassword" , component : ForgotpasswordComponent},
  { path : "addProduct" , component : AddProductComponent },
  { path : "**" , component : PagenotfoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    SignUpComponent,
    PagenotfoundComponent,
    HomeComponent,
    SidebarComponent,
    AddtocartComponent,
    PaymentComponent,
    FirstPageComponent,
    ForgotpasswordComponent,
    AddProductComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(angRoutes,{useHash:true}),
    ToastrModule.forRoot()
  ],
  providers: [LoginService,CategoryService,ProductServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
