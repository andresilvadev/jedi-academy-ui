import { Component, OnInit, Input } from "@angular/core";
import { Student } from "./student.model";

@Component({
  selector: "app-student",
  templateUrl: "./student.component.html",
  styleUrls: ["./student.component.css"],
})
export class StudentComponent implements OnInit {
  // Habilita a propriedade para receber valores do componente parent
  @Input() name: string;

  // Habilita a propriedade para receber valores do componente parent
  @Input() isJedi: boolean;

  // Habilita a propriedade para receber valores do componente parent
  @Input() student: Student;

  // Habilita a propriedade para receber valores do componente parent
  @Input() studentForHidden: Student;

  // Habilita a propriedade para receber valores do componente parent
  @Input() studentForIf: Student;

  // Habilita a propriedade para receber valores do componente parent
  @Input() studentNewWithEvent: Student;

  numPressionado: number = 0;

  constructor() {}

  ngOnInit() {}

  clicked(event): void {
    alert(`Student: ${this.studentNewWithEvent.name} `);
  }

  keyDown(event): void {
    this.numPressionado = this.numPressionado + 1;
    console.log(
      `Student KeyDown: ${this.studentNewWithEvent.name}, click ${this.numPressionado} `
    );
  }
}
