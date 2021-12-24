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
  startAnimation: boolean = false;
  startAnimationSub!: Subscription;
  selectedPlatform!: Platform|null;
  selectedPlatformSub!: Subscription;

  constructor(private trainService: TrainService) { }


  ngOnInit(): void {
    this.selectedPlatformSub = this.trainService.selectedStation.subscribe( data =>{
      this.selectedPlatform = data;
    })
  }

  ngOnDestroy(): void {
    this.startAnimationSub.unsubscribe();
    this.selectedPlatformSub.unsubscribe();
  }

  ngAfterViewInit(): void {
    this.startAnimationSub = this.trainService.startAnimation.subscribe( data => {

      if(this.selectedPlatform?.index === this.platform.index){
        console.log(this.selectedPlatform?.index, this.platform.index)
        this.startAnimation = data;
      }

    })
  }

  // iconsAnimation(){
  //   if(this.startAnimation === 'nextAnimation'){
  //     return 'iconsStartAnimation'
  //   }
  //   if(this.startAnimation === 'backAnimation'){
  //     return 'iconsFinishAnimation'
  //   }
  //   else {
  //     return ''
  //   }
  // }

}
