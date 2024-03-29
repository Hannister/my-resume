import {Component, OnDestroy, OnInit} from '@angular/core';
import {TrainService} from "../train.service";
import {Platform} from "../models/platform";
import {Subscription} from "rxjs";
import {FirebaseHandleService} from "../../firebase-handle.service";

@Component({
  selector: 'app-illustration-and-bubble',
  templateUrl: './illustration-and-bubble.component.html',
  styleUrls: ['./illustration-and-bubble.component.scss']
})
export class IllustrationAndBubbleComponent implements OnInit, OnDestroy {

  constructor(private trainService: TrainService,
              private  DB: FirebaseHandleService) { }

  selectedStation!: Platform|null;
  selectedStationSub!: Subscription;

  ngOnInit(): void {
    this.selectedStationSub = this.DB.selectedStation.subscribe( data => {
      this.selectedStation = data;
    })
  }

  ngOnDestroy(): void {
    this.selectedStationSub.unsubscribe();
  }

}
