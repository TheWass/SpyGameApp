import { TestBed, async, ComponentFixture } from '@angular/core/testing';

import { BasePage } from './base.page';

describe('BasePage', () => {
    let component: BasePage;
    let fixture: ComponentFixture<BasePage>;
    let templateElement: any;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BasePage]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BasePage);
        component = fixture.componentInstance;
        templateElement = fixture.nativeElement;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });

    it('should have an observable that fires and completes when the page is destoyed.', () => {
        //check that BasePage.unsub is an active subject.
        
        //when the page is destroyed, check that BasePage.unsub calls next and complete.
        fixture.destroy();
    });
});
