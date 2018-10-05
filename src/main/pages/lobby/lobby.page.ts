import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { ParticipantsModel, Participant } from '../../models/participants.model';
import { BasePage } from '../base.page';

@Component({
    selector: 'lobby-page',
    templateUrl: './lobby.page.html',
    styleUrls: ['./lobby.page.scss']
})
export class LobbyPage extends BasePage implements OnInit {
    players: Participant[] = [];

    get allPlayersAreReady() {
        return this.players.length > 0 && this.players.every(p => p.ready);
    }

    constructor(private participantsModel: ParticipantsModel) { super(); }

    ngOnInit() {
        this.participantsModel.watch().pipe(
            takeUntil(this.unsub)
        ).subscribe((participants: Participant[]) => {
            this.players = participants;
        });
    }
}
