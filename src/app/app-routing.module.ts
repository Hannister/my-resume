import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WelcomeComponent} from "./welcome/welcome.component";
import {TrainPageComponent} from "./train/train-page.component";

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'about-me', component: TrainPageComponent, data: {animation: 'isRight'}},
  {path: '**', component: WelcomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
