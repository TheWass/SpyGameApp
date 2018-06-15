import { TestBed, inject, async } from '@angular/core/testing';
import { Observable } from 'rxjs';

import { ParticipantsService, Participant } from './participants.service';

describe('ParticipantsService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ParticipantsService]
        });
    });

    it('should be created', inject([ParticipantsService], (service: ParticipantsService) => {
        expect(service).toBeTruthy();
    }));

    it('should fetch participants', async(inject([ParticipantsService], (service: ParticipantsService) => {
        service.watch().subscribe((result: Participant[]) => {
            expect(result.length).toBeGreaterThan(0);
        });
    })));

    it('should add a participant', async(inject([ParticipantsService], (service: ParticipantsService) => {
        service.watch().subscribe((result: Participant[]) => {
            expect(result.length).toBeGreaterThan(0);
        });
    })));

    it('should remove a participant', async(inject([ParticipantsService], (service: ParticipantsService) => {
        service.watch().subscribe((result: Participant[]) => {
            expect(result.length).toBeGreaterThan(0);
        });
    })));
});
