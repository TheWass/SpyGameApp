import { Component, OnInit } from '@angular/core';
import { BasePage } from '../base.page';

@Component({
    selector: 'register-page',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss']
})
export class RegisterPage extends BasePage {

    constructor() { super(); }

    ngOnInit() {
    }

}
