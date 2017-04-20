import { TestBed, inject } from '@angular/core/testing';

import { StoreService } from './store.service';
import {EventService} from "../event.service";

describe('StoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StoreService, EventService],
    });
  });

  it('should ...', inject([StoreService], (service: StoreService) => {
    expect(service).toBeTruthy();
  }));
});
