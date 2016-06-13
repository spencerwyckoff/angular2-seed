/*tslint:disable: */

/**
 * Entry Point of Application
 */

import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {provide} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {ROUTER_PROVIDERS} from '@angular/router';

import {SeedAppComponent} from './app/seed-app';


// enableProdMode()

bootstrap(SeedAppComponent, [
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  provide(LocationStrategy, {useClass: HashLocationStrategy}),
])
.catch((err: any) => console.error(err));
