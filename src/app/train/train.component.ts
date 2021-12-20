import {AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {TrainService} from "./train.service";
import {Station} from "./models/station";
import {transform, transform2} from "./train-animation";

@Component({
  selector: 'app-train',
  templateUrl: './train.component.html',
  styleUrls: ['./train.component.scss'],
  animations: [
    transform,
    transform2
  ]
})
export class TrainComponent implements OnInit, AfterViewInit {

  firstStationSpecs!: any;
  secondStationSpecs!: any;
  trainStation!: Station;
  transformValue:string ='move';
  transformValue2:string ='go';
  moveNum!: number;
  startNum: number = 0;



  constructor(private trainService: TrainService,
              private renderer: Renderer2,
              private elem: ElementRef) { }


  ngOnInit(): void {
    this.trainStation = this.trainService.getStation();
  }

  addFirstAnimation(){
    // this.transformValue = (this.transformValue == 'stay')?'move':'stay';
    // this.moveNum = movementNum;
    // this.startNum= 0
   let allTrain = this.elem.nativeElement.querySelector('.train-container');
   this.renderer.addClass(allTrain, 'first-animation')
  }

  addSecondAnimation(){
    let traincontainer = this.elem.nativeElement.querySelector('.train-container');
    let trainimage = this.elem.nativeElement.querySelector('.train-image');
    let wagonimage = this.elem.nativeElement.querySelector('.wagon-image');

    this.renderer.addClass(traincontainer, 'move1');
    setTimeout(()=>{
      this.renderer.addClass(trainimage, 'down1');

      this.renderer.addClass(wagonimage, 'move1');

    },200);
    setTimeout(()=>{
      this.renderer.addClass(wagonimage, 'move2');
      this.renderer.addClass(trainimage, 'down2');
    },400);
    setTimeout(()=>{
      this.renderer.addClass(wagonimage, 'move2');
      this.renderer.addClass(trainimage, 'down3');
    },600);
    setTimeout(()=>{
      this.renderer.addClass(wagonimage, 'right2');
      this.renderer.addClass(wagonimage, 'down1');
      this.renderer.addClass(trainimage, 'rotate1');
      this.renderer.addClass(trainimage, 'scaleX1');
      this.renderer.addClass(wagonimage, 'down4');
      this.renderer.addClass(trainimage, 'right3');
    },800);

    setTimeout(()=>{
      this.renderer.addClass(wagonimage, 'rotate1');
      this.renderer.addClass(wagonimage, 'down5');
    },1200)
    setTimeout(()=>{
      this.renderer.addClass(trainimage, 'left1');
      this.renderer.addClass(wagonimage, 'left2');
    },1300)

  }

  addThirdAnimation(){
    let allTrain = this.elem.nativeElement.querySelector('.train-container');
    this.renderer.addClass(allTrain, 'third-animation')
  }

  addFourAnimation(){
    let traincontainer = this.elem.nativeElement.querySelector('.train-container');
    let trainimage = this.elem.nativeElement.querySelector('.train-image');
    let wagonimage = this.elem.nativeElement.querySelector('.wagon-image');
    this.renderer.addClass(traincontainer, 'four-animation')
    setTimeout(()=>{
      this.renderer.addClass(traincontainer, 'move3');
      this.renderer.addClass(trainimage, 'rotate2');
      this.renderer.addClass(trainimage, 'scaleX2');
    },200);
    setTimeout(()=>{
      this.renderer.addClass(trainimage, 'down6');
      this.renderer.addClass(wagonimage, 'left3');
      this.renderer.addClass(wagonimage, 'down7');
      this.renderer.addClass(trainimage, 'left4');


    },400);
    setTimeout(()=>{
      this.renderer.addClass(wagonimage, 'rotate2');
      this.renderer.addClass(trainimage, 'rotate3');
      this.renderer.addClass(wagonimage, 'down8');
    },600);
    setTimeout(()=>{
      this.renderer.addClass(wagonimage, 'rotate4');
      this.renderer.addClass(wagonimage, 'down9');
    },1000);

    setTimeout(()=>{
      this.renderer.addClass(wagonimage, 'left6');
      this.renderer.addClass(trainimage, 'left5');
    },1200)


  }

  addFiveAnimation(){
    let allTrain = this.elem.nativeElement.querySelector('.train-container');
    this.renderer.addClass(allTrain, 'move4')
  }



  findDistanceBetweenStations(num: number, num2: number){

  }

  distanceBetweenFirstSecond(){
    return (this.secondStationSpecs.left + (this.secondStationSpecs.width/2)) -(this.firstStationSpecs.left + (this.firstStationSpecs.width/2))

  }



  ngAfterViewInit(): void {
    this.firstStationSpecs = this.elem.nativeElement.querySelector('.firstPlatform').getBoundingClientRect();
    this.secondStationSpecs = this.elem.nativeElement.querySelector('.secondPlatform').getBoundingClientRect();

  }




}
