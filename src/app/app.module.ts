import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HttpHeaderInterceptorProvider } from 'src/base/interceptors/http-header.interceptor';

import { LoaderService } from 'src/presentation/base/services/loader.service';
import { DataModule } from 'src/data/data.module';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { ErrorInterceptorProvider } from 'src/base/interceptors/error.Interceptor';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
export function tokenGetter() {
  return sessionStorage.getItem("access_token");
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatProgressSpinnerModule,
    DataModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["example.com"],
        disallowedRoutes: ["http://example.com/examplebadroute/"],
      },
    }),

    NgbModule,
      BrowserAnimationsModule
  ],

  providers: [/*{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
  },*/
    //ErrorInterceptorProvider,
    HttpHeaderInterceptorProvider,
    //{ provide: ErrorInterceptorProvider },
  { provide: LoaderService },  { provide: JwtHelperService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
