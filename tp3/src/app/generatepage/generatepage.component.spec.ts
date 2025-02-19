import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratepageComponent } from './generatepage.component';

describe('GeneratepageComponent', () => {
  let component: GeneratepageComponent;
  let fixture: ComponentFixture<GeneratepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneratepageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GeneratepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
