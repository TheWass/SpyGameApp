import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'template-page',
    templateUrl: './template.page.html',
    styleUrls: ['./template.page.scss']
})
export class TemplatePage implements OnInit {
    title = 'app';

    constructor() { }

    ngOnInit() {
    }

}
