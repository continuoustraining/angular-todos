import { TestBed, inject } from '@angular/core/testing';

import { EventService } from './event.service';

describe('EventService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventService]
    });
  });

  it('should ...', inject([EventService], (service: EventService) => {
    expect(service).toBeTruthy();
  }));

  it('Should receive a delete event when calling dispatch', inject([EventService], (service: EventService) => {
    const msgSent = 'My Super Todo Label';
    let msgReceived = '';

    service.deleterEvent.subscribe((label: string) => msgReceived = label);
    service.dispatch('deleteTodo', msgSent);

    expect(msgReceived).toBe(msgSent);
  }));
});
