import { TestBed } from '@angular/core/testing';

import { GlobalStylesService } from './global-styles.service';

describe('GlobalStylesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GlobalStylesService = TestBed.get(GlobalStylesService);
    expect(service).toBeTruthy();
  });
});
