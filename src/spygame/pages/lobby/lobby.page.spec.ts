import { TestBed, async, ComponentFixture } from '@angular/core/testing';

import { LobbyPage } from './lobby.page';

describe('LobbyPage', () => {
    let component: LobbyPage;
    let fixture: ComponentFixture<LobbyPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LobbyPage]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LobbyPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
