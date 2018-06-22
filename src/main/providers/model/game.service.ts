import { Injectable } from '@angular/core';
import { PlayerService } from './player.service';
import { Observable, of } from 'rxjs';

enum GameType {
    SpyGame, ONUW
}

export abstract class Game {
    code: string = "";
    static type: GameType;
    abstract start(): void;
}

@Injectable()
export class GameService {

    

    constructor(public player: PlayerService) { }

    //Maybe not implement this for security reasons.
    getJoinableGames(): Observable<Game[]> {
        let moq = [{ 
            code: "FSUC", 
            type: GameType.SpyGame, 
            start: () => {} 
        }, { 
            code: "YHFR", 
            type: GameType.ONUW, 
            start: () => {} 
        }];
        return of(moq);
    }

    create() {
        //Call server to get new game code and join game
    }

    join(gameCode: string){
        //call server to join gameCode
        this.player.joinGame(gameCode);
    }

    leave() {
        //Call server to leave gameCode
        this.player.leaveGame();
    }
    
    start() {
        //Call server to start game
    }

    end() {
        //Call server to end game
    }
}
