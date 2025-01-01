import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import {  HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoggingInterceptor } from './Authentication/logging.interceptor';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { metaReducers } from './State/Metareducer';
import { pageConfigSettingReducerF } from './State/Reducer/PageSetting.Reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

const firebaseConfig = {
  apiKey: "AIzaSyBGmPknD-eJE0nCvtYIs2KLlqLBwrJdF_Y",
  authDomain: "ecomm-17.firebaseapp.com",
  projectId: "ecomm-17",
  storageBucket: "ecomm-17.firebasestorage.app",
  messagingSenderId: "815304009271",
  appId: "1:815304009271:web:d0f699d6acdd0fa58a81b2",
  measurementId: "G-0PPY2B1159"
};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig), // Initialize Firebase
    AngularFireAuthModule,
    StoreModule.forRoot([], { metaReducers }),
    StoreModule.forFeature('SupplierPageConfig', pageConfigSettingReducerF),
    StoreModule.forFeature('CustomerPageConfig', pageConfigSettingReducerF),
    StoreDevtoolsModule.instrument({}),
    ToastrModule.forRoot({ 
      timeOut: 3000,
      positionClass: 'toast-center-center',
      preventDuplicates: true,
    }),
    CommonModule,
  ],
  providers: [
    provideClientHydration(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoggingInterceptor, 
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
