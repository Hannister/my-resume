import {Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  @ViewChild('eyeLeft') eyeLeft!: ElementRef;
  @ViewChild('eyeRight') eyeRight!: ElementRef

  input: any;
  output: any;

  constructor(private renderer: Renderer2, private router: Router ) {
  }

  ngOnInit(): void {

  }

  // handles the pupils movement
  handleMouseMove(event: any) {
    // mouse coordinates
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
    // pupils coordinates
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

    // is responsible for calculating the range that the mouse can move
    this.input.mouseX.range = this.input.mouseX.end - this.input.mouseX.start;
    this.input.mouseY.range = this.input.mouseY.end - this.input.mouseY.start;

    // calculates the range that the pupils can move
    this.output.x.range = this.output.x.end - this.output.x.start;
    this.output.y.range = this.output.y.end - this.output.y.start;

    // gets the current mouse location
    this.input.mouseY.current = event.clientY;
    this.input.mouseX.current = event.clientX;

    // calculates how much the mouse moved
    this.input.mouseX.fraction = (this.input.mouseX.current - this.input.mouseX.start) / this.input.mouseX.range;
    this.input.mouseY.fraction = (this.input.mouseY.current - this.input.mouseY.start) / this.input.mouseY.range;

    // calculates how much the pupils should move relative to the eye sockets
    this.output.x.current = this.output.x.start + (this.input.mouseX.fraction * this.output.x.range);
    this.output.y.current = this.output.y.start + (this.input.mouseY.fraction * this.output.y.range);

    // applies the movement to the pupils
    this.renderer.setStyle(this.eyeRight.nativeElement, 'transform', `translate(${this.output.x.current}px, ${this.output.y.current}px)`);
    this.renderer.setStyle(this.eyeLeft.nativeElement, 'transform', `translate(${this.output.x.current}px, ${this.output.y.current}px)`);

  }


  // handles mouse events on change
  @HostListener('mousemove', ["$event"])
  onMouseMove(event: MouseEvent){
    this.handleMouseMove(event);

  }

  onBtnClick(){
    this.router.navigateByUrl('/about-me');
  }


  }


