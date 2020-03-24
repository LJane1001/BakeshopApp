import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BakeshopComponent } from './Bakeshop/Bakeshop.component';
import { ProductComponent } from './Bakeshop/Product/Product.component';
import { CartComponent } from './Bakeshop/Cart/Cart.component';
import { AuthenticateComponent } from './Bakeshop/Authenticate/Authenticate.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BakeshopComponent,
    ProductComponent,
    CartComponent,
    AuthenticateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
