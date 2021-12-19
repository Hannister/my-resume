import {Component, OnInit} from '@angular/core';
import {TrainService} from "./train.service";
import {Station} from "./models/station";

@Component({
  selector: 'app-train',
  templateUrl: './train.component.html',
  styleUrls: ['./train.component.scss'],
})
export class TrainComponent implements OnInit {


  trainStation!: Station
  constructor(private trainService: TrainService) { }

  ngOnInit(): void {
    this.trainStation = this.trainService.getStation();
    console.log(this.trainStation)

  }

}
