import {Injectable} from '@angular/core';
import {Station} from "./models/station";
import {Platform} from "./models/platform";
import {Train} from "./models/train";
import {Icon} from "./models/icon";
import {BehaviorSubject} from "rxjs";
import {FirebaseHandleService} from "../firebase-handle.service";


@Injectable({providedIn: 'root'})
export class TrainService {


  constructor( private firebase: FirebaseHandleService) {}

  trainStation!: Station ;
  platforms!: Platform[] ;
  train!: Train ;
  IconList!: Icon[] ;


  isTrainMoving: BehaviorSubject<string> = new BehaviorSubject<string>('noMove')
  selectedStation: BehaviorSubject<Platform | null>  = new BehaviorSubject<Platform | null>(null)

  startAnimation: BehaviorSubject<string> = new BehaviorSubject<string>('');
  isFinalStationAnimation: BehaviorSubject<string> = new BehaviorSubject<string>('');

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
      {name: 'poster',
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
        description: 'My name is Hanna but I prefer Hanny, and I’m looking for my next Angular developer position to hone my skills. I work as a developer and designer by day and a computer science student by night. In my free time I enjoy watching comedy horror movies and once a year I have my usual Skyrim replay.',
        type: 'one',
        index: 1,
        scr:'/assets/single.png',
        iconsGroup:[this.findIconByName('diploma'),
        ],
        className: 'one'
      },
      {title: '2010-2015',
        subTitle: 'HELD - Branch Manager, Graphic Designer & Photographer',
        description: 'Held is a chain of shops that offers all types of printing solutions ,such as digital photo developing,  printing on products, printing on canvases, glass and more. As part of my employment in Held I was responsible for the whole store operation including graphic design, digital photo development and printing on products. I was promoted to be the brunch manager and my responsibilities  was to hire new employees and teach them to use the store machines, the programs we use to design client\'s products, the store protocols and more. Also as branch manager I was responsible to do the employees work schedule and to help the employees when they had problems with customers or with their peers.',
        type: 'two',
        index: 2,
        scr:'/assets/double.png',
        iconsGroup:[this.findIconByName('camera'),this.findIconByName('graphic-design'),
        ],
        className: 'two'
      },
      {title: '2014-2015',
        subTitle: 'Graphic Design Diploma at Shenkar College of  Engineering, Design and Art',
        description: 'In my studies at Shenkar College of  Engineering, Design and Art I learned the fundamentals of graphic design, understanding the graphic expression, learned the history of graphic design, got the ability to translate design ideas and develop creativity, learned the knowledge of typography and the history of writing, photography, learned the most advanced and required graphic software in the industry,  i got extensive knowledge and experience in branding design, book, posters, and packaging and much more.',
        type: 'one',
        index: 3,
        scr:'/assets/single.png',
        iconsGroup:[ this.findIconByName('indesign'), this.findIconByName('photoshop'),this.findIconByName('illustrator')
        ],
        className: 'three'
      },
      {title: '2015-2017',
        subTitle: 'Tzevet Aphacot - Graphic Designer',
        description: 'Tzevet Aphacot is a studio that specializes in print design. I was a designer there and I worked on many projects such as branding new companies or rebranding existed companies, designing book covers, designing from scratch catalogs and posters for big companies such as “ארגון העובדים” and ‘Sothys’ an international care products company and much more.',
        type: 'two',
        index: 4,
        scr:'/assets/double.png',
        iconsGroup:[this.findIconByName('posterDesign'),this.findIconByName('logoDesign')
          ,this.findIconByName('printDesign'),this.findIconByName('brandingDesign'),
        ],
        className: 'four'
      },
      {title: '2017-2018',
        subTitle: 'Capital Unit - Web Designer',
        description: 'At Capital Unit I designed and updated websites and landing pages, collaborated with the marketing department on a range of campaigns that includes landing pages, mailers and banners. I designed various social networks campaigns  and I was responsible for all the graphic design within the company, such as posters, flyers, prints for company events, and more.',
        type: 'one',
        index: 5,
        scr:'/assets/single.png',
        iconsGroup:[this.findIconByName('web-design'),this.findIconByName('marketing')
        ],
        className: 'five'
      },
      {title: '2018-2019',
        subTitle: 'Business Wizard - Web Designer & Web Developer',
        description: 'Business Wizard was a marketing company that had small to medium-sized customers. As part of my position at Business Wizard I managed the studio, led the design decisions, created, maintained and updated websites and landing pages hosted on Unbounce with custom scripts and custom design. I learned and used HTML, CSS and JavaScript In order to provide features and designs that Unbounce couldn\'t provide for the clients needs.',
        type: 'two',
        index: 6,
        scr:'/assets/double.png',
        iconsGroup:[this.findIconByName('unbounce'),this.findIconByName('xd'),
          this.findIconByName('css'),this.findIconByName('html'),
          this.findIconByName('js')
        ],
        className: 'six'
      },
      {title: '2019-2020',
        subTitle: 'Freelance - Web Designer & Web Developer',
        description: 'As a freelance designer and developer I worked with various clients on developing and designing websites and landing pages with Angular (8+) from scratch using libraries such as Bootstrap and Angular Material to build and design custom components. For storing Data I used cloud firestore and firebase for hosting. Also I developed and designed static landing pages with HTML, CSS, JavaScript (vanilla js) and  jQuery. As a designer I did various graphic design work tailored to client’s needs.',
        type: 'two',
        index: 7,
        scr:'/assets/double.png',
        iconsGroup:[this.findIconByName('unbounce'),this.findIconByName('xd'),
          this.findIconByName('css'),this.findIconByName('html'),
          this.findIconByName('js')
        ],
        className: 'seven'
      },
      {title: '2019-2021',
        subTitle: 'Volunteer in she codes - Web course Manager ',
        description: 'Manager and instructor in WEB course which includes HTML, CSS, JavaScript and jQuery. I was a student at She codes learning HTML, CSS & JS. After finishing the course I became a teacher of the course and after a short time I was promoted to course manager. As part of managing and teaching students the basics of HTML, CSS & JS I was required to master as much as possible the languages and help students understand them, Debug a lot of code and teach them how to improve their code.',
        type: 'one',
        index: 8,
        scr:'/assets/single.png',
        iconsGroup:[this.findIconByName('css'), this.findIconByName('html'),
          this.findIconByName('js')
        ],
        className: 'eight'
      },
      {title: '2020 - current',
        subTitle: 'SkillBee - Front End Developer & main Designer ',
        description: 'SkillBee is a course creating platform that helps teachers to create, manage and sell their courses. As part of my position at SkillBee I was responsible for the FrontEnd development, design and UI\\UX from the grounds up. We used Angular 12 as the Framework for the FrontEnd, Python and fastAPI as the backend and MongoDB as the database as well as Firebase for its RealtimeDB and Authentication. GitHub was used as the Source Control. I was creating, improving, designing and implementing different types of Components, Services and Directives while heavily relying on RxJS for Data state management and Data Sharing between elements. To Share Data between different components when EventListeners and Inputs were not enough, I used services with Observables, Subjects, Behavioral Subjects and functions. Angular Material and PrimeNG were the libraries I used to design the components and made them more interactive with Animations, Custom Themes, SCSS, HTML and Typescript. To manage user data I used HTTP requests to an API (FastAPI) which was validating the request and storing it to MongoDB. Firebase was used for authentication and realtime data sharing between users like chats and realtime updates.',
        type: 'three',
        index: 9,
        scr:'/assets/three.png',
        iconsGroup:[this.findIconByName('angular'),this.findIconByName('angular-material'),
          this.findIconByName('rxjs'),this.findIconByName('firebase'),
          this.findIconByName('scss'),this.findIconByName('ts'),
        ],
        className: 'nine'
      },
      {title: 'My Next Station',
        subTitle: 'Lorem ipsum dolor sit amet',
        description: 'Designed and updated \n' +
          'websites, collaborated with \n' +
          'the marketing department \n' +
          'on a range of campaigns \n' +
          '(landing pages, mailers and \n' +
          'banners). designed for social \n' +
          'networks and office events',
        type: 'final',
        index: 10,
        scr:'/assets/final.png',
        iconsGroup: this.getIconList(),
        className: 'ten'
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
    this.trainStation = {
      train: this.getTrain(),
      platform: this.getPlatforms()
    }
    this.selectedStation.next(this.trainStation.platform[0])
    return this.trainStation;
  }

  setStartAnimation(value:string){
    this.startAnimation.next(value);
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

  setIsTrainMoving(value:string){
    this.isTrainMoving.next(value);
  }

  getIsTrainMoving(){
    return this.isTrainMoving;
  }

  setSelectedStation(platform:Platform){
    this.selectedStation.next(platform);
  }

  setFinalAnimation(value:string){
    this.isFinalStationAnimation.next(value);
  }

  geSelectedStation(){
    return this.selectedStation;
  }







}
