import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Rx';

@Injectable()
export class PubNubService {

    constructor() { }

    getApiKeys(): Observable<[string, string]> {
        return;
    }
}
