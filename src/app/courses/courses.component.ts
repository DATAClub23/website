import { Component } from '@angular/core';
import { fadeAnimation } from '../fade.animation';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  animations: [fadeAnimation]
})
export class CoursesComponent {

}
