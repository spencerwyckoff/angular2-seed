/*tslint:disable: object-literal-sort-keys no-stateless-class no-console typedef member-access no-missing-visibility-modifiers no-empty */

/**
 * @class LoginFormComponent
 */

import {Component} from '@angular/core';
import {NgForm} from '@angular/common';

import {User} from '../../models/user';

@Component({
  directives: [],
  pipes: [],
  providers: [],
  selector: 'ps-login-form',
  styleUrls: ['app/components/login/login-form.css'],
  templateUrl: 'app/components/login/login-form.html',
})
export class LoginFormComponent {
  public model = new User('spencerwyckoff', 'password');
  submitted = false;
  onClick(event, model) {
    console.log(event);
    console.log(this.model);
    this.submitted = true;
  }
  // todo: Removed this when we're done
  get diagnostic() {return JSON.stringify(this.model); }
}
