import { Component } from "@angular/core";
import { Student } from "./student/student.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  lukeObj = { name: "Luke", isJedi: true, temple: "Coruscant" };
  leiaObj = { name: "Leia", isJedi: false, temple: "Coruscant" };
  hanObj = { name: "Han Solo", isJedi: false, temple: "Coruscant" };

  studentsList: Student[] = [
    { name: "Luke", isJedi: true, temple: "Coruscant" },
    { name: "Leia", isJedi: false, temple: "Coruscant" },
    { name: "Han Solo", isJedi: false, temple: "Coruscant" },
  ];
}
