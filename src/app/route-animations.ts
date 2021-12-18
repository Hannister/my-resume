import {
  trigger,
  transition,
  style,
  query,
  group,
  animateChild,
  animate,
  keyframes,
} from '@angular/animations';





export const slider =
  trigger('routeAnimations', [
    transition('* => isLeft', slideTo('left') ),
    transition('* => isRight', slideTo('right') ),
    transition('isRight => *', slideTo('left') ),
    transition('isLeft => *', slideTo('right') )
  ]);

function slideTo(direction:any) {
  const optional = { optional: true };
  return [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        [direction]: 0,
        width: '100%',
        overflow: 'hidden'
      })
    ], optional),
    query(':enter', [
      style({ overflow: 'hidden',[direction]: '-100%'})
    ]),
    group([
      query(':leave', [
        animate('600ms ease', style({ overflow: 'hidden',[direction]: '100%'}))
      ], optional),
      query(':enter', [
        animate('600ms ease', style({overflow: 'hidden', [direction]: '0%'}))
      ])
    ]),

  ];
}
