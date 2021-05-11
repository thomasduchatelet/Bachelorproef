import { TestBed } from '@angular/core/testing';

import { ChartSettingsService } from './chart-settings.service';

describe('ChartSettingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChartSettingsService = TestBed.get(ChartSettingsService);
    expect(service).toBeTruthy();
  });
});
