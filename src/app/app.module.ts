import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { InterceptorService } from 'src/base/interceptors/interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderService } from 'src/presentation/base/services/loader.service';
import { DataModule } from 'src/data/data.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatProgressSpinnerModule,
    DataModule
  ],

  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
  }, { provide: LoaderService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
