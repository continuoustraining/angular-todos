import { TestBed, inject } from '@angular/core/testing';

import { HttpService } from './http.service';
import {HttpModule} from "@angular/http";

describe('HttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpService],
      imports: [ HttpModule ]
    });
  });

  it('should ...', inject([HttpService], (service: HttpService) => {
    expect(service).toBeTruthy();
  }));

  it('Should have 5 random peoples', inject([HttpService], (service: HttpService) => {
    service.getUsers(5).subscribe(users => {
      expect(users.length).toBe(5);
    });
  }));
});
