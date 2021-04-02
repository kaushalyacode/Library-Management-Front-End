import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BookserviceService } from './bookservice.service';
import { HttpClientModule } from '@angular/common/http';
import { BookcomponentComponent } from './bookcomponent/bookcomponent.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    BookcomponentComponent,
    NavbarComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [BookserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }