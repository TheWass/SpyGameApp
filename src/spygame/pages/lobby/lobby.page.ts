import { Component, OnInit } from '@angular/core';

import { ParticipantsService, Participant } from '../../providers/participants/participants.service'

@Component({
    selector: 'lobby-page',
    templateUrl: './lobby.page.html',
    styleUrls: ['./lobby.page.scss']
})
export class LobbyPage implements OnInit {
    
    players: Participant[];

    constructor() { }

    ngOnInit() {
    }

}
