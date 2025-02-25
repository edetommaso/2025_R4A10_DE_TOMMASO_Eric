import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCardTravelComponent } from './single-card-travel.component';

describe('SingleCardTravelComponent', () => {
  let component: SingleCardTravelComponent;
  let fixture: ComponentFixture<SingleCardTravelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleCardTravelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingleCardTravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
