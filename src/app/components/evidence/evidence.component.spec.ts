import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvidenceComponent } from './evidence.component';

describe('EvidenceComponent', () => {
  let component: EvidenceComponent;
  let fixture: ComponentFixture<EvidenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EvidenceComponent]
    });
    fixture = TestBed.createComponent(EvidenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
