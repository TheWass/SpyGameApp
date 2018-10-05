import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

export interface Participant {
    username: string;
    ready: boolean;
}

@Injectable()
export class ParticipantsService {
    private participants: BehaviorSubject<Participant[]> = new BehaviorSubject(<Participant[]>[]);

    watch(): Observable<Participant[]> {
        return this.participants.asObservable();
    }

    synchronize(participants: Participant[]) {
        this.participants.next(participants);
    }

    snapshot(): Participant[] | null {
        return this.participants.getValue();
    }
}
