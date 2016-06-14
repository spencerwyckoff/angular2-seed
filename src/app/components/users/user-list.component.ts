/*tslint:disable: object-literal-sort-keys no-stateless-class no-empty */

/**
 * @class SeedApp
 */

 import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';

 @Component({
     selector: 'user-list',
     templateUrl: 'user-list.component.html',
     directives: [],
     providers: [],
     styleUrls: [],
     pipes: []
 })

 export class NameComponent implements OnInit, OnDestroy {
   @Input() name: type;
   @Output() eventName: EventEmitter<string>;

   constructor(
   ) {}

 }
