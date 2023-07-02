import { trigger, transition, style, animate } from '@angular/animations';

export const fadeAnimation = trigger('fadeAnimation', [
  transition('* => *', [
    // Initial state
    style({ opacity: 0 }),

    // Animation with easing
    animate('0.5s', style({ opacity: 1 }))
  ])
]);
