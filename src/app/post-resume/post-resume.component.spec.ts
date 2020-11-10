import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostResumeComponent } from './post-resume.component';

describe('PostResumeComponent', () => {
  let component: PostResumeComponent;
  let fixture: ComponentFixture<PostResumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostResumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
