import { ComponentFixture, TestBed } from '@angular/core/testing';

import { predicasComponent } from './predicas.component';

describe('predicasComponent', () => {
  let component: predicasComponent;
  let fixture: ComponentFixture<predicasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [predicasComponent]
    });
    fixture = TestBed.createComponent(predicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
