import {Platform} from "./platform";
import {Train} from "./train";

export interface Station{
  platform: Platform[];
  train: Train;
  // constructor( platform: Platform, train:Train) {
  //   this.platform = platform;
  //   this.train = train;
  // }
}
