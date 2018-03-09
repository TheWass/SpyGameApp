import { Http, Response, Request } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class RegisterService {
    constructor() { }

    registerPlayer(playerName: string, gameCode: string): Observable<any> {
        return Observable.empty();
    }

    registerGame(playerName: string): Observable<any> {
        return;
    }

    disconnect(): Observable<any> {
        return;
    }
}
