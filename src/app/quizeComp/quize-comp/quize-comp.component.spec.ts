import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizeCompComponent } from './quize-comp.component';

describe('QuizeCompComponent', () => {
  let component: QuizeCompComponent;
  let fixture: ComponentFixture<QuizeCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizeCompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuizeCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
