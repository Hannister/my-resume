import {AfterViewInit, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Platform} from "../models/platform";
import {Subscription} from "rxjs";
import {TrainService} from "../train.service";

@Component({
  selector: 'app-platform',
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.component.scss']
})
export class PlatformComponent implements OnInit, OnDestroy, AfterViewInit {

  @Input() platform!: Platform;
  startAnimation: string = '';
  startAnimationSub!: Subscription;
  selectedPlatform!: Platform|null;
  selectedPlatformSub!: Subscription;
  finalStation: boolean = false;


  constructor(private trainService: TrainService) { }


  ngOnInit(): void {
    this.selectedPlatformSub = this.trainService.selectedStation.subscribe( data =>{
      this.selectedPlatform = data;
      if (this.selectedPlatform?.index==10){
        setTimeout(()=>{
          this.finalStation = false;
        },1200)
      }
    })


    if(this.platform.index ===10){
      this.finalStation = true;
    }else {
      this.finalStation = false;
    }


  }

  ngOnDestroy(): void {
    this.startAnimationSub.unsubscribe();
    this.selectedPlatformSub.unsubscribe();
  }

  ngAfterViewInit(): void {
    this.startAnimationSub = this.trainService.startAnimation.subscribe( data => {

      if(this.selectedPlatform?.index === this.platform.index){
        this.startAnimation = data;
      }

    })
  }


}
