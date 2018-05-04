import { TestBed, inject } from '@angular/core/testing';
import { Observable } from 'rxjs';

import { AuthService } from './auth.service';

describe('AuthService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AuthService]
        });
    });

    it('should be created', inject([AuthService], (service: AuthService) => {
        expect(service).toBeTruthy();
    }));

    it('should store authentication credentials', inject([AuthService], (service: AuthService) => {
        pending();
    }));

    it('should retrieve authentication credentials', inject([AuthService], (service: AuthService) => {
        pending();
    }));
});
