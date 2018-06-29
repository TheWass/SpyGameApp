import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

export enum GameType {
    SpyGame, ONUW
}

export abstract class Game {
    code: string = "";
    static type: GameType;
    abstract start(): void;
}

@Injectable()
export class GameService {
    constructor() { }

    create(type: GameType): Observable<string> {
        //Call server to get new game code and join game
        return of("QWER").pipe(
            tap((gameCode: string) => {
                
            })
        );
    }
    
    start() {
        //Call server to start game
    }

    joinGame(username: string, gameCode: string): Observable<void> {
        return of(undefined);
    }

    leaveGame() {

    }
}
