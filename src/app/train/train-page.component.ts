import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild} from '@angular/core';
import {TrainService} from "./train.service";
import {Station} from "./models/station";
import {transform, transform2} from "./train-animation";
import {Subscription} from "rxjs";
import {Platform} from "./models/platform";

@Component({
  selector: 'app-train',
  templateUrl: './train-page.component.html',
  styleUrls: ['./train-page.component.scss'],
  animations: [
    transform,
    transform2
  ]
})
export class TrainPageComponent implements OnInit, AfterViewInit, OnDestroy {

  trainStation!: Station;
  selectedPlatform!: Platform|null;
  selectedPlatformSub!: Subscription;

  allPlatformLeft =  0;
  count =1;




  @ViewChild('train') train!: ElementRef;
  @ViewChild('allPlatforms') allPlatforms!: ElementRef;



  constructor(private trainService: TrainService,
              private renderer: Renderer2,
              private elem: ElementRef) { }


  ngOnInit(): void {
    this.trainStation = this.trainService.getStation();


    this.selectedPlatformSub = this.trainService.selectedStation.subscribe( data => {
      this.selectedPlatform = data;
    })
  }




  toNextStation(){
    this.trainService.setIsTrainMoving(true);

    let tempStation = this.selectedPlatform;
    if(tempStation) {
      if(tempStation.index<10){
        this.allPlatformLeft-=880;
        this.renderer.setStyle(this.train.nativeElement, 'left', `${-this.allPlatformLeft+320}px`);
      }
      if(tempStation.index<9){
        this.renderer.setStyle(this.allPlatforms.nativeElement, 'left', `${this.allPlatformLeft}px`);
      }


        this.trainService.setSelectedStation(this.trainStation.platform[tempStation.index])
      if (tempStation.index === 10) {
        this.trainService.setSelectedStation(this.trainStation.platform[tempStation.index-1])
      }
    }

    setTimeout( ()=>{
      this.trainService.setIsTrainMoving(false);
    },1100);

  }

  toPreviousStation(){

    this.trainService.setIsTrainMoving(true);
    let tempStation = this.selectedPlatform;
    if(tempStation) {

      console.log(tempStation.index)
     if(tempStation.index >=2){
       this.allPlatformLeft+=880;

       this.renderer.setStyle(this.train.nativeElement, 'left', `${-this.allPlatformLeft+320}px`);
       this.renderer.setStyle(this.allPlatforms.nativeElement, 'left', `${this.allPlatformLeft}px`);

     }
      this.trainService.setSelectedStation(this.trainStation.platform[tempStation.index-2])

      if (tempStation.index === 1) {
        this.trainService.setSelectedStation(this.trainStation.platform[tempStation.index-1])
      }
    }

    setTimeout( ()=>{
      this.trainService.setIsTrainMoving(false);
    },1100);
  }




  ngAfterViewInit(): void {
    this.allPlatformLeft =  Number(getComputedStyle(this.allPlatforms.nativeElement).left.substr(0,1));
  }

  ngOnDestroy(): void {
    this.selectedPlatformSub.unsubscribe();
  }





}
