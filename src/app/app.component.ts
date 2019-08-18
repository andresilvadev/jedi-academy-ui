import { Component } from '@angular/core';
import { Student } from './student/student.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jedi-academy-ui';

  students: Student[] = [
    { name: 'Luke', isJedi: true, temple: 'Coruscant' },
    { name: 'Leia', isJedi: false, temple: 'Coruscant' },
    { name: 'Han Solo', isJedi: false, temple: 'Coruscant' }
  ]

  luke  = { name: 'Luke', isJedi: true, temple: 'Coruscant' }
  leia  = { name: 'Leia', isJedi: false, temple: 'Coruscant' }
  han   = { name: 'Han Solo', isJedi: false, temple: 'Coruscant' }
}
