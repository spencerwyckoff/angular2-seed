/*tslint:disable: */

/**
 * Entry Point of Application
 */

/* Imports for loading & configuring the in-memory web api */
import {provide} from '@angular/core';
import {XHRBackend} from '@angular/http';

import {InMemoryBackendService, SEED_DATA} from 'angular2-in-memory-web-api';
import {UserData} from './app/services/user-data';

/* The usual bootstrapping imports */
import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';
import {ROUTER_PROVIDERS} from '@angular/router';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import {SeedAppComponent} from './app/seed-app';



// enableProdMode()

bootstrap(SeedAppComponent, [
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  provide(LocationStrategy, {useClass: HashLocationStrategy}),
  provide(XHRBackend, {useClass: InMemoryBackendService}),
  provide(SEED_DATA, {useClass: UserData}),
])
.catch((err: any) => console.error(err));
