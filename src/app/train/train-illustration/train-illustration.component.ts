import {Component, ElementRef, Input, OnDestroy, OnInit, Renderer2, ViewChild} from '@angular/core';
import {Subscription} from "rxjs";
import {TrainService} from "../train.service";
import {Train} from "../models/train";
import {Platform} from "../models/platform";
import {FirebaseHandleService} from "../../firebase-handle.service";

@Component({
  selector: 'app-train-illustration',
  templateUrl: './train-illustration.component.html',
  styleUrls: ['./train-illustration.component.scss']
})
export class TrainIllustrationComponent implements OnInit, OnDestroy {

  isTrainMoving: string = 'noMove';
  isTrainMovingSub!: Subscription;
  isFinalStationAnimation: string = 'noMove'
  isFinalStationAnimationSub!: Subscription;

  @Input() train! : Train;
  @ViewChild('icons') icons!: ElementRef;

  selectedPlatformSub!: Subscription;
  finalStation: boolean = false;

  constructor(private trainService: TrainService,
              private renderer: Renderer2,
              private DB: FirebaseHandleService) { }

  ngOnInit(): void {
    this.isTrainMovingSub = this.trainService.isTrainMoving.subscribe( data =>{
      this.isTrainMoving = data;
    })

    this.isFinalStationAnimationSub = this.trainService.isFinalStationAnimation.subscribe( data => {
      this.isFinalStationAnimation = data;
    })

    this.selectedPlatformSub = this.DB.selectedStation.subscribe( data=> {
      if (data?.index === 10){
        setTimeout( ()=>{
          this.finalStation = true;
        },1500)
      }else {
        setTimeout( ()=>{
          this.finalStation = false;
        },400)
      }
    })

  }

  ngOnDestroy(): void {
    this.isTrainMovingSub.unsubscribe();
    this.selectedPlatformSub.unsubscribe();
    this.isFinalStationAnimationSub.unsubscribe();
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
