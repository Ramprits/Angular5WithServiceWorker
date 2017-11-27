import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';
import { PanelModule, DataTableModule, SplitButtonModule, ButtonModule } from 'primeng/primeng';
import { environment } from '../environments/environment';
import { HomeComponent } from './home/home.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { VisionComponent } from './vision/vision.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VisionComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, SplitButtonModule, PanelModule, DataTableModule, ButtonModule,
    AppRoutingModule, AngularFireModule.initializeApp(environment.firebase), AngularFirestoreModule.enablePersistence(),
    environment.production ? ServiceWorkerModule.register('/ngsw-worker.js') : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
