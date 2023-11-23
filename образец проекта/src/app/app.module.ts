import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ProductSummaryComponent } from './product-summary/product-summary.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AboutComponent } from './about/about.component';
import { TypesComponent } from './types/types.component';
import { ProductAddComponent } from './product-add/product-add.component';
// для работы с Формами
import { FormsModule } from '@angular/forms';


// для работы с firebase
// нужно устанавливать @angular/fire/app
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

// конфигурация firebase
import { environment } from '../environments/environment'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    ProductSummaryComponent,
    ProductDetailComponent,
    AboutComponent,
    TypesComponent,
    ProductAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
