/*tslint:disable: no-console */

/**
 * LoggerService
 */
import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
    public log(msg: any): void { console.log(msg); }
    public error(msg: any): void { console.error(msg); }
    public warn(msg: any): void { console.warn(msg); }
}
