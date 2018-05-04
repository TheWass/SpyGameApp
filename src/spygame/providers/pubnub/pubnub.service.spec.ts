import { TestBed, inject } from '@angular/core/testing';
import { Observable } from 'rxjs';

import { PubNubService } from './pubnub.service';

describe('PubNubService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [PubNubService]
        });
    });

    it('should be created', inject([PubNubService], (service: PubNubService) => {
        expect(service).toBeTruthy();
    }));

    it('should get the API keys from the C# server.', inject([PubNubService], (service: PubNubService) => {
        service.getApiKeys();
    }));
});
