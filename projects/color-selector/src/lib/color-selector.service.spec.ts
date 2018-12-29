import { TestBed, inject } from '@angular/core/testing';

import { ColorSelectorService } from './color-selector.service';

describe('ColorSelectorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ColorSelectorService]
    });
  });

  it('should be created', inject([ColorSelectorService], (service: ColorSelectorService) => {
    expect(service).toBeTruthy();
  }));
});
