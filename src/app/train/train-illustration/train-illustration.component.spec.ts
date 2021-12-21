import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainIllustrationComponent } from './train-illustration.component';

describe('TrainIllustrationComponent', () => {
  let component: TrainIllustrationComponent;
  let fixture: ComponentFixture<TrainIllustrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainIllustrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainIllustrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
