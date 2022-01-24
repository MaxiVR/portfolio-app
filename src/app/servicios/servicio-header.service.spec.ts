import { TestBed } from '@angular/core/testing';

import { ServicioHeaderService } from './servicio-header.service';

describe('ServicioHeaderService', () => {
  let service: ServicioHeaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioHeaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
