import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Platform} from "../models/platform";
import {Subscription} from "rxjs";
import {TrainService} from "../train.service";

@Component({
  selector: 'app-platform',
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.component.scss']
})
export class PlatformComponent implements OnInit, OnDestroy {

  @Input() platform!: Platform;


  constructor(private trainService: TrainService) { }


  ngOnInit(): void {
    //
  }

  ngOnDestroy(): void {
  }

}
