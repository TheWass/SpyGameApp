import { TestBed, inject } from '@angular/core/testing';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';

describe('ApiService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ApiService]
        });
    });

    it('should be created', inject([ApiService], (service: ApiService) => {
        expect(service).toBeTruthy();
    }));

    it('should make a GET call', inject([ApiService], (service: ApiService) => {
        pending();
    }));

    it('should make a GET call with authentication', inject([ApiService], (service: ApiService) => {
        pending();
    }));

    it('should make a POST call', inject([ApiService], (service: ApiService) => {
        pending();
    }));

    it('should make a POST call with authentication', inject([ApiService], (service: ApiService) => {
        pending();
    }));
});
