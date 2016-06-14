/*tslint:disable: object-literal-sort-keys no-stateless-class no-empty */

/**
 * @class SeedApp
 */

import {Component} from '@angular/core';
import {Routes, ROUTER_DIRECTIVES} from '@angular/router';
// add the RxJS Observable operators we need in this app.
import './rxjs-operators';

import {LoginComponent} from './components/login/login';
import {HeaderComponent} from './components/header/header';
import {FooterComponent} from './components/footer/footer';
import {About} from './components/about/about';
import {RepoBrowser} from './components/repo-browser/repo-browser';
import {LoggerService} from './logger';

import {UserListComponent} from './components/users/user-list';


@Component({
  directives: [ROUTER_DIRECTIVES, HeaderComponent, FooterComponent, UserListComponent],
  pipes: [],
  providers: [LoggerService],
  selector: 'ps-app',
  styleUrls: ['app/seed-app.css'],
  templateUrl: 'app/seed-app.html',
})
@Routes([
  { path: '/',       component: LoginComponent},
  { path: '/login',  component: LoginComponent},
  { path: '/about',  component: About},
  { path: '/github', component: RepoBrowser},
  { path: '/users',  component: UserListComponent},
])
export class SeedAppComponent {

  constructor() {}

}
