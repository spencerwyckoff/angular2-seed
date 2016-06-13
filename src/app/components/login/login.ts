/*tslint:disable: object-literal-sort-keys no-stateless-class no-empty */

/**
 * @class LoginComponent
 */

 import {Component} from '@angular/core';
 import {LoginFormComponent} from './login-form';

@Component({
  directives: [LoginFormComponent],
  pipes: [],
  providers: [],
  selector: 'ps-login',
  styleUrls: ['app/components/login/login.css'],
  templateUrl: 'app/components/login/login.html',
})
export class LoginComponent {
  constructor() {}
}
