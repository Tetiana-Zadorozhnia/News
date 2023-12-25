import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtitleSectionComponent } from './subtitle-section.component';

describe('SubtitleSectionComponent', () => {
  let component: SubtitleSectionComponent;
  let fixture: ComponentFixture<SubtitleSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubtitleSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubtitleSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
