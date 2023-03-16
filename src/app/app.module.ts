import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Pages/header/header.component';
import { BodyComponent } from './Pages/body/body.component';
import { FooterComponent } from './Pages/footer/footer.component';
import {RouterModule, Routes} from "@angular/router";
import {NgxTypedJsModule} from "ngx-typed-js";

const appRoutes:Routes=[

  {path:'',component:BodyComponent  }

];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
      NgxTypedJsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
