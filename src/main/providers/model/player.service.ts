import { Injectable } from '@angular/core';
import { Participant } from './participants.service';

@Injectable()
export class PlayerService implements Participant {
    private _gameCode?: string;
    private _username: string = "";
    private _ready: boolean = false;

    get username(): string {
        return this._username;
    }
    
    get ready(): boolean {
        return this._ready;
    }

    get gameCode(): string | undefined {
        return this._gameCode;
    }

    changeUsername(newName: string) {
        this._username = newName;
    }

    joinGame(gameCode: string) {
        if (this._gameCode) throw "Already in a game.";
        this._gameCode = gameCode;
    }

    leaveGame() {
        this._gameCode = "";
    }

    readyUp() {
        if (this._gameCode) this._ready = true;
    }

    unReady() {
        this._ready = false;
    }
}
