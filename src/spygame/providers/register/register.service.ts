import { Http, Response, Request } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable, empty } from 'rxjs';

@Injectable()
export class RegisterService {
    constructor() { }

    registerPlayer(playerName: string, gameCode: string): Observable<any> {
        return empty();
    }

    registerGame(playerName: string): Observable<any> {
        return;
    }

    disconnect(): Observable<any> {
        return;
    }
}
