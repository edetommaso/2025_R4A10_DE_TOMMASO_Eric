import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionPageTravelsComponent } from './gestion-page-travels.component';

describe('GestionPageTravelsComponent', () => {
  let component: GestionPageTravelsComponent;
  let fixture: ComponentFixture<GestionPageTravelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionPageTravelsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestionPageTravelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
