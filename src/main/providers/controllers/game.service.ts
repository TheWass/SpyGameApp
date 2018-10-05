import { Injectable } from '@angular/core';
import { Observable, of, empty } from 'rxjs';
import { tap } from 'rxjs/operators';

import { ParticipantsModel } from '../../models/participants.model';

export enum GameType {
    SpyGame, ONUW
}

export abstract class Game {
    static type: GameType;
    code = '';
    abstract start(): void;
}

@Injectable()
export class GameService {
    constructor(public participantsModel: ParticipantsModel) { }

    create(type: GameType): Observable<string> {
        // Get a new game code and join game
        return of('QWER').pipe(
            tap((gameCode: string) => {
            })
        );
    }

    start() {
        // Call server to start game
    }

    joinGame(username: string, gameCode: string): Observable<void> {
        // Add self to participants list.
        this.participantsModel.add(username);
        return empty();
    }

    leaveGame(username: string) {
        // Remove self from participants list.
        this.participantsModel.remove(username);
        // Reset Game
    }
}
