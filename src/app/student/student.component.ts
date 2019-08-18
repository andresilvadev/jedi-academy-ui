import { Component, OnInit, Input } from '@angular/core';
import { Student } from './student.model';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  // Modelo vendo com propriedades
  // @Input()
  // name: string = 'Luke';

  // @Input()
  // isJedi: boolean = true;

  // Modelo feito com Objeto
  @Input()
  student: Student;

  constructor() { }

  ngOnInit() {
  }

  clicked() {
    console.log(`Studente: ${this.student.name} `);
  }

}
