import { TestBed } from '@angular/core/testing';

import { CardTitleService } from './card-title.service';

describe('CardTitleService', () => {
  let service: CardTitleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardTitleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
