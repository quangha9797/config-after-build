import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { ConfigLoaderService } from './config-loader.service';
import { PreloadFactory } from './preload-service.factory';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    { provide: APP_INITIALIZER,
      deps: [
        ConfigLoaderService
      ],
      multi: true,
      useFactory: PreloadFactory
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
