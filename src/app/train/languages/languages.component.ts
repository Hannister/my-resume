import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent implements OnInit {

  @ViewChild('circleGraph') circleGraph!: ElementRef;
  starCircleAnimation: boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll')
  checkScroll() {
    const scrollPosition = window.pageYOffset + window.innerHeight;
    let circlePoint = this.circleGraph.nativeElement.getBoundingClientRect().top +this.circleGraph.nativeElement.getBoundingClientRect().height

    this.starCircleAnimation = circlePoint + 200 <= scrollPosition;
  }

}
