import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeDevisComponent } from './demande-devis.component';

describe('DemandeDevisComponent', () => {
  let component: DemandeDevisComponent;
  let fixture: ComponentFixture<DemandeDevisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandeDevisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeDevisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
