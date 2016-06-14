/*tslint:disable: object-literal-sort-keys no-stateless-class no-empty */

/**
 * @class SeedApp
 */

import {Component} from '@angular/core';
import {Routes, ROUTER_DIRECTIVES} from '@angular/router';

import {LoginComponent} from './components/login/login';
import {HeaderComponent} from './components/header/header';
import {FooterComponent} from './components/footer/footer';
import {About} from './components/about/about';
import {RepoBrowser} from './components/repo-browser/repo-browser';
import {LoggerService} from './logger';

@Component({
  directives: [ROUTER_DIRECTIVES, HeaderComponent, FooterComponent],
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
])
export class SeedAppComponent {

  constructor() {}

}
