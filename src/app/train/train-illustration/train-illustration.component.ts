import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {TrainService} from "../train.service";

@Component({
  selector: 'app-train-illustration',
  templateUrl: './train-illustration.component.html',
  styleUrls: ['./train-illustration.component.scss']
})
export class TrainIllustrationComponent implements OnInit, OnDestroy {

  isTrainMoving: boolean = false;
  isTrainMovingSub!: Subscription;
  constructor(private trainService: TrainService) { }

  ngOnInit(): void {
    this.isTrainMovingSub = this.trainService.isTrainMoving.subscribe( data =>{
      this.isTrainMoving = data;
    })
  }

  ngOnDestroy(): void {
    this.isTrainMovingSub.unsubscribe()
  }

}
