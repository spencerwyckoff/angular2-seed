/*tslint:disable: member-access no-empty */

/**
 * @class LoginFormComponent
 */

/* Directives */
import {Component} from '@angular/core';
/* Services */
import {LoggerService} from '../../logger';
/* Models */
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
  // this active state is a workaround for resetting a form
  // it might be removed later on when a better reset feature is released
  public active: boolean    = true;
  public submitted: boolean = false;
  public model: User        = new User('spencerwyckoff', 'password');
  private logger: LoggerService;

  constructor(logger: LoggerService) {
    this.logger = logger;
  }

  public onSubmit(): void {
    this.logger.log(this.model);
    this.submitted = true;
  }

  public addNewUser(): void {
    this.model = new User('', '');
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }
}
