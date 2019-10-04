import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// main modules
import { AppRoutingModule } from './modules/routing/app-routing.module';
import { AppComponent } from './app.component';

// feature modules
import { MainModule } from './modules/main/main.module';
import { FooterModule } from './modules/footer/footer.module';
import { HeaderModule } from './modules/header/header.module';
import { CpaModule } from './modules/cpa/cpa.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    MainModule,
    FooterModule,
    CpaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
