import { Component, OnInit } from '@angular/core';
import { BasePage } from '../base.page';

@Component({
    selector: 'template-page',
    templateUrl: './template.page.html',
    styleUrls: ['./template.page.scss']
})
export class TemplatePage extends BasePage implements OnInit {
    title = 'app';

    constructor() { super(); }

    ngOnInit() {
    }

}
