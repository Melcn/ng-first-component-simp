import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SayHelloComponent } from './say-hello/say-hello.component';
import { SecondCmpComponent } from './second-cmp/second-cmp.component';


@NgModule({
  declarations: [
    AppComponent,
    SayHelloComponent,
    SecondCmpComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
