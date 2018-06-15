import { Component } from '@angular/core';
import { takeUntil } from 'rxjs/operators';

import { ParticipantsService, Participant } from '../../providers/participants/participants.service';
import { BasePage } from '../base.page';

@Component({
    selector: 'lobby-page',
    templateUrl: './lobby.page.html',
    styleUrls: ['./lobby.page.scss']
})
export class LobbyPage extends BasePage {
    
    players: Participant[];

    constructor(private partService: ParticipantsService) { super(); }

    ngOnInit() {
        this.partService.fetch().pipe(
            takeUntil(this.unsub)
        ).subscribe((participants: Participant[]) => {
            this.players = participants;
        });
    }

}
