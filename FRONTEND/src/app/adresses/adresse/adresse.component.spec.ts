import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdresseComponent } from './adresse.component';

describe('ContactComponent', () => {
  let component: AdresseComponent;
  let fixture: ComponentFixture<AdresseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdresseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdresseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
