import { TestBed } from '@angular/core/testing';

import { DataFakeService } from './data-fake.service';

describe('DataFakeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataFakeService = TestBed.get(DataFakeService);
    expect(service).toBeTruthy();
  });
});
