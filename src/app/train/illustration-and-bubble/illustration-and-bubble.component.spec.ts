import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IllustrationAndBubbleComponent } from './illustration-and-bubble.component';

describe('IllustrationAndBubbleComponent', () => {
  let component: IllustrationAndBubbleComponent;
  let fixture: ComponentFixture<IllustrationAndBubbleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IllustrationAndBubbleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IllustrationAndBubbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
