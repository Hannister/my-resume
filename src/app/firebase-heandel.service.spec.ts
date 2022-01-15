import { TestBed } from '@angular/core/testing';

import { FirebaseHandleService } from './firebase-handle.service';

describe('FirebaseHeandelService', () => {
  let service: FirebaseHandleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseHandleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
