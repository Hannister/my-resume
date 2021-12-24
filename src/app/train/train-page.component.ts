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
    this.trainService.setIsTrainMoving('forward');
    let tempIcons =  this.trainService.trainStation.platform[9].iconsGroup;

    let tempStation = this.selectedPlatform;
    if(tempStation) {

      setTimeout( ()=>{
        this.trainService.setStartAnimation('nextAnimation');
      },0);

      if(tempStation.index<10){
        this.allPlatformLeft-=880;

        setTimeout( ()=>{
          this.renderer.setStyle(this.train.nativeElement, 'left', `${-this.allPlatformLeft+320}px`);
        },400);
      }
      if(tempStation.index<9){
        setTimeout( ()=>{
          this.renderer.setStyle(this.allPlatforms.nativeElement, 'left', `${this.allPlatformLeft}px`);
        },400);
      }
      this.trainService.setStartAnimation('');

      setTimeout( ()=>{
        if(tempStation?.index!==10){

        }
        this.iconsNextAnimation(tempStation!.index);
        this.trainService.setSelectedStation(this.trainStation.platform[tempStation!.index])
        if (tempStation!.index === 10) {
          this.trainService.setSelectedStation(this.trainStation.platform[tempStation!.index-1])
        }
      },400);
    }

    setTimeout( ()=>{
      this.trainService.setIsTrainMoving('noMove');
    },1100);


  }

  toPreviousStation(){
    let tempIcons =  this.trainService.trainStation.platform[9].iconsGroup;


    this.trainService.setIsTrainMoving('backward');
    let tempStation = this.selectedPlatform;
    if(tempStation) {

      setTimeout( ()=>{
        this.trainService.setStartAnimation('backAnimation');
      },1000)

     if(tempStation.index >=2){
       this.allPlatformLeft+=880;
       this.renderer.setStyle(this.train.nativeElement, 'left', `${-this.allPlatformLeft+320}px`);
       this.renderer.setStyle(this.allPlatforms.nativeElement, 'left', `${this.allPlatformLeft}px`);
     }

     this.trainService.setStartAnimation('');
     this.trainService.setSelectedStation(this.trainStation.platform[tempStation!.index-2])
      if (tempStation!.index === 1) {
        this.trainService.setSelectedStation(this.trainStation.platform[tempStation!.index-1])
      }
      this.iconsBackAnimation(tempStation!.index)

    }

    setTimeout( ()=>{
      this.trainService.setIsTrainMoving('noMove');
    },1000);


    if(tempStation?.index === 10){

    }
  }




  ngAfterViewInit(): void {
    if(this.trainStation.platform[0]){
      this.allPlatformLeft = Number(getComputedStyle(this.allPlatforms.nativeElement).left.substr(0,1)) -41;
    }
    else {
      this.allPlatformLeft =  Number(getComputedStyle(this.allPlatforms.nativeElement).left.substr(0,1));
    }
  }

  ngOnDestroy(): void {
    this.selectedPlatformSub.unsubscribe();
  }

  iconsNextAnimation(index: number){
    if(this.trainStation.platform[index-1]){
      for(let icon of this.trainStation.platform[index-1].iconsGroup!){
        icon.visible = false;
        for(let trainIcon of this.trainStation.train.icons){
          if(icon.name === trainIcon.name){
            trainIcon.visible = true;
          }
        }
      }

    }
  }

  iconsBackAnimation(index: number){
    if(this.trainStation.platform[index-2]){
      setTimeout( ()=>{
        for(let icon of this.trainStation.platform[index-2].iconsGroup!){
          icon.visible = true;
          for(let trainIcon of this.trainStation.train.icons){
            if(icon.name === trainIcon.name){
              trainIcon.visible = false;
            }
          }
        }
      },1000)

    }
  }




}
