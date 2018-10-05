import { Component, OnInit } from '@angular/core';
import { BasePage } from '../base.page';

@Component({
    selector: 'notfound-page',
    templateUrl: './notfound.page.html',
    styleUrls: ['./notfound.page.scss']
})
export class NotFoundPage extends BasePage implements OnInit {

    constructor() { super(); }

    ngOnInit() {
    }

}
