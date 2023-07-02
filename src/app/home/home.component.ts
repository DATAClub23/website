import { Component } from '@angular/core';
import { fadeAnimation } from '../fade.animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [fadeAnimation]
})
export class HomeComponent {

}
