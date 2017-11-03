import { Injectable } from '@angular/core';

/*
 Generated class for the ApiConfig provider.
 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class ApiConfig {

  constructor() {}
  static get env() {
      const envConst = 'dev';
      return envConst;
    }
    static get domain() {
      const domainConst = 'http://localhost:8100';
      return domainConst;
    }
    static get prefix() {
      const prefixConst = 'api/v2';
      return prefixConst;
    }
    static get url() {
      const urlConst = 'http://localhost:8100/api/v2/';
      return urlConst;
    }
    static get proxies() {
      const proxiesConst = [{'path': '/api/v2', 'proxyUrl': 'http://intellicasting-api.omnispear.org/api/v2'}];
      return proxiesConst;
    }
    static get signup() {
      const signupConst = 'https://www.intellicasting.com/#demo';
      return signupConst;
    }
    static get pushSandbox() {
      const pushSandboxConst = true;
      return pushSandboxConst;
    }
}
