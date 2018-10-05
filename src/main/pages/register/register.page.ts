import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

import { BasePage } from '../base.page';
import { GameService } from '../../providers/controllers/game.service';

@Component({
    selector: 'register-page',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss']
})
export class RegisterPage extends BasePage {

    register = new FormGroup({
        username: new FormControl(),
        gameCode: new FormControl()
    });

    constructor(public router: Router, public gameService: GameService) { super(); }

    onRegister() {
        const username = this.register.value.username as string;
        const gameCode = this.register.value.gameCode as string;
        this.gameService.joinGame(username, gameCode).subscribe(() => {
            this.router.navigate(['lobby']);
        });
    }
}
