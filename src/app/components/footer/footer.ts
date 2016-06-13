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
  selector: 'ps-footer',
  styleUrls: ['app/components/footer/footer.css'],
  templateUrl: 'app/components/footer/footer.html',
})
export class FooterComponent {
  constructor() {}
}
