import {Icon} from "./icon";

export interface Platform {
  title: string;
  subTitle: string;
  description: string;
  type: string;
  scr: string;
  index: number;
  iconsGroup: Icon[];

  // constructor( title:string, subTitle:string, description:string, type:string, scr:string, index:number, iconsGroup:[Icon]) {
  //   this.title = title;
  //   this.subTitle = subTitle;
  //   this.description = description;
  //   this.type = type;
  //   this.scr = title;
  //   this.index = index;
  //   this.iconsGroup = iconsGroup;
  // }
}
