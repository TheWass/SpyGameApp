import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

export interface Participant {
    username: string;
    ready: boolean;
}

@Injectable()
export class ParticipantsModel {
    private participants: BehaviorSubject<Participant[]> = new BehaviorSubject(<Participant[]>[]);

    watch(): Observable<Participant[]> {
        return this.participants.asObservable();
    }

    synchronize(participants: Participant[]) {
        this.participants.next(participants);
    }

    private snapshot(): Participant[] {
        return this.participants.getValue() || <Participant[]>[];
    }

    add(username: string) {
        const participantList = this.snapshot();
        participantList.push({username: username, ready: false});
        this.synchronize(participantList);
    }

    remove(username: string) {
        this.synchronize(this.snapshot().filter((e: Participant) => e.username !== username));
    }
}
