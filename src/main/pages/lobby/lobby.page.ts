import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { ParticipantsService, Participant } from '../../providers/model/participants.service';
import { BasePage } from '../base.page';

@Component({
    selector: 'lobby-page',
    templateUrl: './lobby.page.html',
    styleUrls: ['./lobby.page.scss']
})
export class LobbyPage extends BasePage {
    
    players: Participant[] = [];

    get allPlayersAreReady() {
        return this.players.length > 0 && this.players.every(p => p.ready);
    }

    constructor(private partService: ParticipantsService) { super(); }

    ngOnInit() {
        this.partService.watch().pipe(
            takeUntil(this.unsub)
        ).subscribe((participants: Participant[]) => {
            this.players = participants;
        });
    }
}
