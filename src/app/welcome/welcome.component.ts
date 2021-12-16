import {AfterViewInit, Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit, AfterViewInit {

  @ViewChild('eyeLeft') eyeLeft!: ElementRef;
  @ViewChild('eyeRight') eyeRight!: ElementRef

  input: any;
  output: any;


  constructor(private renderer: Renderer2) {
  }

  ngOnInit(): void {

  }

  handleMouseMove(event: any) {
    this.input = {
      mouseX: {
        start: 0,
        end: window.innerWidth,
        current: 0,
      },
      mouseY: {
        start: 0,
        end: window.innerHeight,
        current: 0,
      }
    }

    this.output = {
      x: {
        start: -6,
        end: 6,
        current: 0,
      },
      y: {
        start: -7,
        end: 4,
        current: 0,
      }
    }
    this.input.mouseX.range = this.input.mouseX.end - this.input.mouseX.start;
    this.input.mouseY.range = this.input.mouseY.end - this.input.mouseY.start;

    this.output.x.range = this.output.x.end - this.output.x.start;
    this.output.y.range = this.output.y.end - this.output.y.start;

    this.input.mouseY.current = event.clientY;
    this.input.mouseX.current = event.clientX;
    this.input.mouseX.fraction = (this.input.mouseX.current - this.input.mouseX.start) / this.input.mouseX.range;
    this.input.mouseY.fraction = (this.input.mouseY.current - this.input.mouseY.start) / this.input.mouseY.range;

    this.output.x.current = this.output.x.start + (this.input.mouseX.fraction * this.output.x.range);
    this.output.y.current = this.output.y.start + (this.input.mouseY.fraction * this.output.y.range);

    this.renderer.setStyle(this.eyeRight.nativeElement, 'transform', `translate(${this.output.x.current}px, ${this.output.y.current}px)`);
    this.renderer.setStyle(this.eyeLeft.nativeElement, 'transform', `translate(${this.output.x.current}px, ${this.output.y.current}px)`);

  }
    handleResize(){
      this.input.mouseY.end=window.innerHeight;
      this.input.mouseX.end=window.innerWidth;
      this.input.mouseY.range=this.input.mouseY.end-this.input.mouseY.start;
      this.input.mouseX.range=this.input.mouseX.end-this.input.mouseX.start;
    }

  ngAfterViewInit(): void {
    console.log(this.eyeRight)
  }

  @HostListener('mousemove', ["$event"])
  onMouseMove(event: MouseEvent){
    this.handleMouseMove(event)
    this.handleResize()

  }

    //
    // eyeMovement(event:MouseEvent){
    //   this.moveOneEye(this.eyeDivLeft,event);
    //   this.moveOneEye(this.eyeDivRight,event);
    // }
    //
    // moveOneEye(divEye: any, event:MouseEvent){
    //   let eye = divEye.nativeElement;
    //   let x = (eye.getBoundingClientRect().left) + (eye.clientWidth/ 2);
    //   let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);
    //
    //
    //   let rad = Math.atan2(event.pageX - x, event.pageY - y);
    //   let rot = (rad * (180 / Math.PI) * -1) + 180;
    //
    //   this.renderer.setStyle(divEye.nativeElement, 'transform', `rotate(${rot}deg)`);
    // }


  }


