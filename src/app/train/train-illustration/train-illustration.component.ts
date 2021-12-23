import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {TrainService} from "../train.service";
import {Train} from "../models/train";

@Component({
  selector: 'app-train-illustration',
  templateUrl: './train-illustration.component.html',
  styleUrls: ['./train-illustration.component.scss']
})
export class TrainIllustrationComponent implements OnInit, OnDestroy {

  isTrainMoving: string = 'noMove';
  isTrainMovingSub!: Subscription;

  @Input() train! : Train;

  constructor(private trainService: TrainService) { }

  ngOnInit(): void {
    this.isTrainMovingSub = this.trainService.isTrainMoving.subscribe( data =>{
      this.isTrainMoving = data;
      console.log(data)
    })
  }

  ngOnDestroy(): void {
    this.isTrainMovingSub.unsubscribe()
  }

  getWheelDirection(){
    if (this.isTrainMoving === 'backward'){
      return 'wheel-backward-animation';
    }
    if(this.isTrainMoving === 'forward'){
      return 'wheel-forward-animation';
    }
    else{
      return ''
    }

  }

}
