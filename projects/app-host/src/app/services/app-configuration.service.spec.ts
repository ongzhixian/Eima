import { TestBed } from '@angular/core/testing';

import { AppConfigurationService } from './app-configuration.service';
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';

describe('AppConfigurationService', () => {
  let service: AppConfigurationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(withInterceptorsFromDi())
      ]
    });
    service = TestBed.inject(AppConfigurationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
