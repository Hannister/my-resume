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
import { TrainComponent } from './train/train.component';
import { IllustrationAndBubbleComponent } from './train/illustration-and-bubble/illustration-and-bubble.component';
import { SubTitlesComponent } from './train/sub-titles/sub-titles.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    TrainComponent,
    IllustrationAndBubbleComponent,
    SubTitlesComponent
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
