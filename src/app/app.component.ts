import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jedi-academy-ui';

  luke = {
    name: 'Luke',
    isJedi: true,
    temple: 'Coruscant'
  }

  leia = {
    name: 'Leia',
    isJedi: false,
    temple: 'Coruscant'
  }

  han = {
    name: 'Han Solo',
    isJedi: false,
    temple: 'Coruscant'
  }
}
