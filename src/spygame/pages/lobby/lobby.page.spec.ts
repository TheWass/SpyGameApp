import { TestBed, async, ComponentFixture } from '@angular/core/testing';

import { LobbyPage } from './lobby.page';

describe('LobbyPage', () => {
    let component: LobbyPage;
    let fixture: ComponentFixture<LobbyPage>;
    let templateElement: any;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LobbyPage]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LobbyPage);
        component = fixture.componentInstance;
        templateElement = fixture.nativeElement;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });

    it('should populate players after loading', async(() => {
        expect(component.players.length).toBeGreaterThan(0);
    }));

    it('should add players as they come in');

    it('should start a game');
});
