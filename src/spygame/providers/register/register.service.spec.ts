import { TestBed, inject } from '@angular/core/testing';

import { RegisterService } from './register.service';

describe('RegisterService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [RegisterService]
        });
    });

    it('should be created', inject([RegisterService], (service: RegisterService) => {
        expect(service).toBeTruthy();
    }));

    it('should register a new user', inject([RegisterService], (service: RegisterService) => {
        // Register a user
        pending();
    }));

    it('should login a user', inject([RegisterService], (service: RegisterService) => {
        // login a user
        pending();
    }));

    it('should logout a user', inject([RegisterService], (service: RegisterService) => {
        // logout a user
        pending();
    }));

    it('should reset a user password', inject([RegisterService], (service: RegisterService) => {
        // Register a user
        pending();
    }));
});
