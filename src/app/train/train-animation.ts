import {
  trigger,
  animate,
  transition,
  style,
  state, keyframes
} from '@angular/animations';

export const transform = trigger('transformAnimation',
  [
    state('move',
      style({ left: '{{leftStart}}px', }),
      { params: { leftStart: '0'}}),
    state('stay',
      style({ left: '{{left}}px'}),
      { params: { left: '*'}}
    ),
    transition('* <=> *',animate('600ms ease-in')),
  ]
);

export const transform2 = trigger('transformAnimation2',
  [
    state('go',
      style({ left: '600px', })),
    state('don',
      style({ left: '300px'}),
      { params: { left: '*'}}
    ),
    transition('move2 <=> stay2',animate('600ms ease-in')),
  ]
);
