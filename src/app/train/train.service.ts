import { Injectable } from '@angular/core';
import {Station} from "./models/station";
import {Platform} from "./models/platform";
import {Train} from "./models/train";
import {Icon} from "./models/icon";
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({providedIn: 'root'})
export class TrainService {

  constructor() { }

  trainStation!: Station ;
  platforms!: Platform[] ;
  train!: Train ;
  IconList!: Icon[] ;

  setTrainStation(){
    // this.trainStation = new Station( new Platform(), new train() )
  }


  getIconList() : Icon[]{
    return this.IconList = [
      {name: 'diploma',
      src: '/assets/icons/diploma.png',
      index: 1,
      visible: true},
      {name: 'camera',
        src: '/assets/icons/camera.png',
        index: 1,
        visible: true},
      {name: 'graphic-design',
        src: '/assets/icons/graphic-design.png',
        index: 1,
        visible: true},
      {name: 'posterDesign',
        src: '/assets/icons/poster.png',
        index: 2,
        visible: true},
      {name: 'logoDesign',
        src: '/assets/icons/logo.png',
        index: 2,
        visible: true},
      {name: 'printDesign',
        src: '/assets/icons/flyer.png',
        index: 2,
        visible: true},
      {name: 'brandingDesign',
        src: '/assets/icons/branding.png',
        index: 2,
        visible: true},
      {name: 'illustrator',
        src: '/assets/icons/illustrator.png',
        index: 3,
        visible: true},
      {name: 'photoshop',
        src: '/assets/icons/photoshop.png',
        index: 3,
        visible: true},
      {name: 'indesign',
        src: '/assets/icons/indesign.png',
        index: 3,
        visible: true},
      {name: 'web-design',
        src: '/assets/icons/web-design.png',
        index: 2,
        visible: true},
      {name: 'marketing',
        src: '/assets/icons/marketing.png',
        index: 2,
        visible: true},
      {name: 'unbounce',
        src: '/assets/icons/unbounce.png',
        index: 2,
        visible: true},
      {name: 'xd',
        src: '/assets/icons/xd.png',
        index: 2,
        visible: true},
      {name: 'html',
        src: '/assets/icons/html.png',
        index: 3,
        visible: true},
      {name: 'css',
        src: '/assets/icons/css.png',
        index: 3,
        visible: true},
      {name: 'js',
        src: '/assets/icons/js.png',
        index: 3,
        visible: true},
      {name: 'angular',
        src: '/assets/icons/angular.png',
        index: 2,
        visible: true},
      {name: 'angular-material',
        src: '/assets/icons/angular-material.png',
        index: 2,
        visible: true},
      {name: 'rxjs',
        src: '/assets/icons/rxjs.png',
        index: 2,
        visible: true},
      {name: 'firebase',
        src: '/assets/icons/firebase.png',
        index: 2,
        visible: true},
      {name: 'scss',
        src: '/assets/icons/scss.png',
        index: 2,
        visible: true},
      {name: 'ts',
        src: '/assets/icons/ts.png',
        index: 2,
        visible: true},
    ]
  }

  getPlatforms() : Platform[]{
    return  this.platforms = [
      {title: '2009',
        subTitle: 'School Diploma',
        description: '',
        type: 'one',
        index: 1,
        scr:'/assets/single.png',
        iconsGroup:[this.findIconByName('diploma'),
        ],
      },
      {title: '2010-2015',
        subTitle: 'HELD - Branch Manager, Graphic Designer & Photographer',
        description: '',
        type: 'two',
        index: 2,
        scr:'/assets/double.png',
        iconsGroup:[this.findIconByName('camera'),this.findIconByName('graphic-design'),
        ],
      },
      {title: '2014-2015',
        subTitle: 'Graphic Design Diploma at Shenkar College of  Engineering, Design and Art',
        description: '',
        type: 'one',
        index: 3,
        scr:'/assets/single.png',
        iconsGroup:[this.findIconByName('photoshop'),this.findIconByName('illustrator')
          ,this.findIconByName('indesign'),
        ],
      },
      {title: '2015-2017',
        subTitle: 'Tzevet Aphacot - Graphic Designer',
        description: '',
        type: 'two',
        index: 4,
        scr:'/assets/double.png',
        iconsGroup:[this.findIconByName('posterDesign'),this.findIconByName('logoDesign')
          ,this.findIconByName('printDesign'),this.findIconByName('brandingDesign'),
        ],
      },
      {title: '2017-2018',
        subTitle: 'Capital Unit - Web Designer',
        description: '',
        type: 'one',
        index: 5,
        scr:'/assets/single.png',
        iconsGroup:[this.findIconByName('web-design'),this.findIconByName('marketing')
        ],
      },
      {title: '2018-2019',
        subTitle: 'Business Wizard - Web Designer & Web Developer',
        description: '',
        type: 'two',
        index: 6,
        scr:'/assets/double.png',
        iconsGroup:[this.findIconByName('unbounce'),this.findIconByName('xd'),
          this.findIconByName('css'),this.findIconByName('html'),
          this.findIconByName('js')
        ],
      },
      {title: '2019-2020',
        subTitle: 'Freelance - Web Designer & Web Developer',
        description: '',
        type: 'two',
        index: 7,
        scr:'/assets/double.png',
        iconsGroup:[this.findIconByName('unbounce'),this.findIconByName('xd'),
          this.findIconByName('css'),this.findIconByName('html'),
          this.findIconByName('js')
        ],
      },
      {title: '2019-2021',
        subTitle: 'Volunteer in she codes - Web course Manager ',
        description: '',
        type: 'one',
        index: 8,
        scr:'/assets/single.png',
        iconsGroup:[this.findIconByName('css'), this.findIconByName('html'),
          this.findIconByName('js')
        ],
      },
      {title: '2020 - current',
        subTitle: 'SkillBee - Front End Developer & main Designer ',
        description: '',
        type: 'three',
        index: 9,
        scr:'/assets/three.png',
        iconsGroup:[this.findIconByName('angular'),this.findIconByName('angular-material'),
          this.findIconByName('rxjs'),this.findIconByName('firebase'),
          this.findIconByName('scss'),this.findIconByName('ts'),
        ],
      },
      {title: 'My Next Station',
        subTitle: 'Lorem ipsum dolor sit amet',
        description: '',
        type: 'final',
        index: 10,
        scr:'/assets/final.png',
        iconsGroup: this.getIconList()
      },
    ]
  }

  getTrain(){
    return this.train = {
      icons: this.hideIcons(this.getIconList()),
      trainScr: '/assets/train.png',
      trainWagon: '/assets/wagon.png'
    }
  }

  getStation() : Station{
    return this.trainStation = {
      train: this.getTrain(),
      platform: this.getPlatforms()
    }
  }

  findIconByName(name:string) : Icon{
    let iconList = this.getIconList()
    for(let item of iconList){
      if(item.name === name){
        return item
      }
    }
    return {name: 'error',
      src: '/assets/icons/error.png',
      index: 2,
      visible: true};
  }

  hideIcons(iconsList: Icon[]){
    for( let icon of iconsList){
      icon.visible = false;
    }
    return iconsList;
  }



}
