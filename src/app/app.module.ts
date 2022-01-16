import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatSliderModule} from "@angular/material/slider";
import {MatCardModule} from "@angular/material/card";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatRadioModule} from "@angular/material/radio";
import {FormsModule} from "@angular/forms";
import { WelcomeComponent } from './welcome/welcome.component';
import { TrainPageComponent } from './train/train-page.component';
import { IllustrationAndBubbleComponent } from './train/illustration-and-bubble/illustration-and-bubble.component';
import { SubTitlesComponent } from './train/sub-titles/sub-titles.component';
import { PlatformComponent } from './train/platform/platform.component';
import { TrainIllustrationComponent } from './train/train-illustration/train-illustration.component';
import { ContactComponent } from './train/contact/contact.component';
import { LanguagesComponent } from './train/languages/languages.component';
import { ThankYouComponent } from './train/thank-you/thank-you.component';
import {MatIconModule} from "@angular/material/icon";
import { environment } from '../environments/environment';
import { ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireStorage, AngularFireStorageModule} from "@angular/fire/compat/storage";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    TrainPageComponent,
    IllustrationAndBubbleComponent,
    SubTitlesComponent,
    PlatformComponent,
    TrainIllustrationComponent,
    ContactComponent,
    LanguagesComponent,
    ThankYouComponent,

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatSliderModule,
        MatCardModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        FormsModule,
        MatIconModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireStorageModule,
        HttpClientModule

    ],
  providers: [
    ScreenTrackingService,UserTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
