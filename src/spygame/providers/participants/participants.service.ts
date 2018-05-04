import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Participant {
    username: string,
    ready: boolean
}
@Injectable()
export class ParticipantsService {

    private partMock: Participant[] = [    
        { username: "Player1", ready: false },
        { username: "Player2", ready: false },
        { username: "Player3", ready: true },
        { username: "Player4", ready: false }
    ];

    constructor() { }

    fetch(): Observable<Participant[]> {
        return Observable.of(this.partMock);
    }
}
