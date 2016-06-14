/*tslint:disable: no-backbone-get-set-outside-model */

/**
 * UserData Service
 */

import {Injectable} from '@angular/core';
import {Http, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Github {
  public http: Http;
  constructor(http: Http) {
    this.http = http;
  }

  public getOrg(org: string) {
    return this.makeRequest(`orgs/${org}`);
  }

  public getReposForOrg(org: string) {
    return this.makeRequest(`orgs/${org}/repos`);
  }

  public getRepoForOrg(org: string, repo: string) {
    return this.makeRequest(`repos/${org}/${repo}`);
  }

  private makeRequest(path: string): any {
    const params: any = new URLSearchParams();
    params.set('per_page', '100');

    const url: string = `https://api.github.com/${ path }`;
    return this.http.get(url, {search: params})
      .map((res: any) => res.json());
  }
}
