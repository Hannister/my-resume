import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubTitlesComponent } from './sub-titles.component';

describe('SubTitlesComponent', () => {
  let component: SubTitlesComponent;
  let fixture: ComponentFixture<SubTitlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubTitlesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubTitlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
