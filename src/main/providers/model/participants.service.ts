import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

export interface Participant {
    username: string,
    ready: boolean
}

@Injectable()
export class ParticipantsService {
    private participants: BehaviorSubject<Participant[]> = new BehaviorSubject([]);

    watch(): Observable<Participant[]> {
        return this.participants.asObservable();
    }

    synchronize(participants: Participant[]) {
        this.participants.next(participants);
    }

    snapshot(): Participant[] {
        return this.participants.getValue();
    }

    add(username: string) {
        let participants: Participant[] = this.participants.getValue();
        if (participants.some(p => p.username == username)) throw "Username already exists.";
        participants.push({ username: username, ready: false });
        this.participants.next(participants);
    }

    remove(username: string) {
        let participants: Participant[] = this.participants.getValue().filter((p: Participant) => {
            return p.username != username;
        });
        this.participants.next(participants);
    }

    ready(username: string) {
        let participants: Participant[] = this.participants.getValue().map((p: Participant) => {
            if (p.username == username) p.ready = true;
            return p;
        });
        this.participants.next(participants);
    }

    unready(username: string) {
        let participants: Participant[] = this.participants.getValue().map((p: Participant) => {
            if (p.username == username) p.ready = false;
            return p;
        });
        this.participants.next(participants);
    }

    changeUsername(oldName: string, newName: string) {
        let participants: Participant[] = this.participants.getValue();
        if (participants.some(p => p.username == newName)) throw "Username already exists.";
        participants = participants.map((p: Participant) => {
            if (p.username == oldName) p.username = newName;
            return p;
        });
        this.participants.next(participants);
    }
}
