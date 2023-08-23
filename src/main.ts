/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { AppComponent } from './app/app.component';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
// platformBrowserDynamic().bootstrapModule(AppComponent, [
//    appRouterProviders,
//   // HTTP_PROVIDERS,
//   // EmailValidator,
//   // disableDeprecatedForms(),     // Disable old Forms API!
//   // provideForms(),                // Use new Forms API!
//   // // providers used to create fake backend
//   // //{ provide: XHRBackend},
//   // { provide: LocationStrategy, useClass: HashLocationStrategy },
//   // LocalStorageService
// ])
//   .catch(err => console.error(err));
