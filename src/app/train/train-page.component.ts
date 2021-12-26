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
  randomNumNext: number = -50;
  randomNumBack: number = 50;

  @ViewChild('train') train!: ElementRef;
  @ViewChild('allPlatforms') allPlatforms!: ElementRef;
  @ViewChild('rails') rails!: ElementRef;



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
          this.renderer.setStyle(this.rails.nativeElement, 'transform', `translateX(${this.randomNumNext}px)`);
        },400);
      }

      setTimeout( ()=>{

        this.iconsNextAnimation(tempStation!.index);
        this.trainService.setSelectedStation(this.trainStation.platform[tempStation!.index])
        if (tempStation!.index === 10) {
          this.trainService.setSelectedStation(this.trainStation.platform[tempStation!.index-1])
        }
      },400);
    }

    setTimeout( ()=>{
      this.trainService.setIsTrainMoving('noMove');
      this.trainService.setStartAnimation('');
    },1300);


    if(this.selectedPlatform?.index ===9 && this.selectedPlatform?.index+1 ===10 ){
      for(let icon of this.trainStation.platform[9].iconsGroup!){
        setTimeout( ()=>{
          icon.visible = true;
        },1900)
      }
    }


    if(this.selectedPlatform?.index ===9){
      setTimeout( ()=> {this.trainService.setFinalAnimation('toStation')},1500)

    }
    if(this.selectedPlatform?.index ===9){
      setTimeout( ()=> {this.trainService.setFinalAnimation('noMove')},1900)

    }


    this.randomNumNext -= 50;

  }

  toPreviousStation(){

    this.trainService.setIsTrainMoving('backward');
    let tempStation = this.selectedPlatform;
    if(this.selectedPlatform) {

      // icon jump animation
      setTimeout( ()=>{
        this.trainService.setStartAnimation('backAnimation');
      },1000);

      //stop animations
      setTimeout( ()=>{
        this.trainService.setIsTrainMoving('noMove');
        this.trainService.setStartAnimation('');
      },1200);

      // movement animation
     if(this.selectedPlatform.index >=2){
       this.allPlatformLeft+=880;
       if(this.selectedPlatform?.index!==10){
         this.renderer.setStyle(this.train.nativeElement, 'left', `${-this.allPlatformLeft+320}px`);
         this.renderer.setStyle(this.allPlatforms.nativeElement, 'left', `${this.allPlatformLeft}px`);
         this.renderer.setStyle(this.rails.nativeElement, 'transform', `translateX(${this.randomNumBack}px)`);
       }else {
         setTimeout(()=>{this.renderer.setStyle(this.train.nativeElement, 'left', `${-this.allPlatformLeft+320}px`);
           this.renderer.setStyle(this.allPlatforms.nativeElement, 'left', `${this.allPlatformLeft}px`);
           this.renderer.setStyle(this.rails.nativeElement, 'transform', `translateX(${this.randomNumBack}px)`);},500)
       }

     }
     this.trainService.setSelectedStation(this.trainStation.platform[this.selectedPlatform!.index-2])
      if (this.selectedPlatform!.index === 1) {
        this.trainService.setSelectedStation(this.trainStation.platform[this.selectedPlatform!.index-1])
      }
    }

  // hive final icons after click
    setTimeout( ()=>{
      if(this.selectedPlatform?.index ===9 && this.selectedPlatform?.index+1 ===10 ){
        for(let icon of this.trainStation.platform[9].iconsGroup!){
          icon.visible = false;
        }
      }
    },400)

    // final station animation animation
    if(this.selectedPlatform?.index ===9){
      setTimeout( ()=> {this.trainService.setFinalAnimation('toWagon')},0)
      setTimeout( ()=> {
        this.trainService.setFinalAnimation('noMove');
        this.iconsBackAnimation(tempStation!.index)
      },500);
      setTimeout( ()=> {this.trainService.setStartAnimation('backAnimation')},1500)

    }else{
      this.iconsBackAnimation(tempStation!.index)
    }


    this.randomNumBack += 50;
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
