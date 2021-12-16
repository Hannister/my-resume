import {Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  @ViewChild('eyeLeft') eyeDivLeft!: ElementRef;
  @ViewChild('eyeRight') eyeDivRight!: ElementRef;

  constructor(private renderer:Renderer2) { }

  ngOnInit(): void {
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e:any) {

  }

  eyeMovement(event:MouseEvent){
    this.moveOneEye(this.eyeDivLeft,event);
    this.moveOneEye(this.eyeDivRight,event);
  }

  moveOneEye(divEye: any, event:MouseEvent){
    let eye = divEye.nativeElement;
    let x = (eye.getBoundingClientRect().left) + (eye.clientWidth/ 2);
    let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);


    let rad = Math.atan2(event.pageX - x, event.pageY - y);
    let rot = (rad * (180 / Math.PI) * -1) + 180;

    this.renderer.setStyle(divEye.nativeElement, 'transform', `rotate(${rot}deg)`);
  }



}

