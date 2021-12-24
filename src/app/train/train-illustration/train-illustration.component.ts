import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {TrainService} from "../train.service";
import {Train} from "../models/train";
import {Platform} from "../models/platform";

@Component({
  selector: 'app-train-illustration',
  templateUrl: './train-illustration.component.html',
  styleUrls: ['./train-illustration.component.scss']
})
export class TrainIllustrationComponent implements OnInit, OnDestroy {

  isTrainMoving: string = 'noMove';
  isTrainMovingSub!: Subscription;

  @Input() train! : Train;

  selectedPlatform!: Platform|null;
  selectedPlatformSub!: Subscription;
  finalStation: boolean = false;

  constructor(private trainService: TrainService) { }

  ngOnInit(): void {
    this.isTrainMovingSub = this.trainService.isTrainMoving.subscribe( data =>{
      this.isTrainMoving = data;
    })

    this.selectedPlatformSub = this.trainService.selectedStation.subscribe( data=> {
      if (data?.index === 10){
        setTimeout( ()=>{
          this.finalStation = true;
        },1100)
      } else{
        this.finalStation = false;
      }
    })

  }

  ngOnDestroy(): void {
    this.isTrainMovingSub.unsubscribe();
    this.selectedPlatformSub.unsubscribe();
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
