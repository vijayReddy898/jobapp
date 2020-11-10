import { TestBed, inject } from '@angular/core/testing';

import { PostresumeService } from './postresume.service';

describe('PostresumeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostresumeService]
    });
  });

  it('should be created', inject([PostresumeService], (service: PostresumeService) => {
    expect(service).toBeTruthy();
  }));
});
