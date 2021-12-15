import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WelcomeComponent} from "./welcome/welcome.component";
import {TrainComponent} from "./train/train.component";

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'about-me', component: TrainComponent},
  {path: '**', component: WelcomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
