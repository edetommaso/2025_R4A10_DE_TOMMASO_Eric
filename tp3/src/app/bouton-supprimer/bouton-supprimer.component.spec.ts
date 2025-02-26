import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutonSupprimerComponent } from './bouton-supprimer.component';

describe('BoutonSupprimerComponent', () => {
  let component: BoutonSupprimerComponent;
  let fixture: ComponentFixture<BoutonSupprimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoutonSupprimerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoutonSupprimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
