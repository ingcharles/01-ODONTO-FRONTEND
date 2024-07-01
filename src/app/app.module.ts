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
import { MatPaginatorIntl } from '@angular/material/paginator';
import { getDutchPaginatorIntl } from 'src/base/paginator-intl';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNgxMask } from 'ngx-mask';
export function tokenGetter() {
  return sessionStorage.getItem("access_token");
}
// const maskConfig: Partial<IConfig> = {
//   validation: true,
// };

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
    RouterModule,
    MatFormFieldModule,

  ],

  providers: [/*{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
  },*/
    //ErrorInterceptorProvider,

    HttpHeaderInterceptorProvider,
    // provideEnvironmentNgxMask(maskConfig),
    //{ provide: ErrorInterceptorProvider },
    { provide: LoaderService }, { provide: JwtHelperService }, { provide: MatPaginatorIntl, useValue: getDutchPaginatorIntl() }],
  bootstrap: [AppComponent]
})
export class AppModule { }


