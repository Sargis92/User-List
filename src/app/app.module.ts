import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoaderComponent } from './common/components/loader/loader.component';
import { UsersService } from './common/services/users.service';


@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: resourceProviderFactory,
      deps: [UsersService],
      multi: true
      },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function resourceProviderFactory(provider: UsersService) {
   return () => provider.getUserData();
}
