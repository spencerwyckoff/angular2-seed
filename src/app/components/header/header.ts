/*tslint:disable: object-literal-sort-keys no-stateless-class no-empty */

/**
 * @class LoginComponent
 */
 import {Component} from '@angular/core';
 import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  directives: [ROUTER_DIRECTIVES],
  pipes: [],
  providers: [],
  selector: 'ps-header',
  styleUrls: ['app/components/header/header.css'],
  templateUrl: 'app/components/header/header.html',
})
export class HeaderComponent {
  constructor() {}
}
