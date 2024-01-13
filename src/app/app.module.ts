import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HttpHeaderInterceptorProvider } from 'src/base/interceptors/http-header.interceptor';
import { LoaderService } from 'src/presentation/base/services/loader.service';
import { DataModule } from 'src/data/data.module';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from 'src/presentation/home/home.module';
import { RouterModule } from '@angular/router';
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

    // NgbModule,
    BrowserAnimationsModule,
    HomeModule,
    RouterModule
  ],

  providers: [/*{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
  },*/
    //ErrorInterceptorProvider,
    HttpHeaderInterceptorProvider,
    //{ provide: ErrorInterceptorProvider },
    { provide: LoaderService }, { provide: JwtHelperService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
