import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SociaisComponent } from './sociais.component';

describe('SociaisComponent', () => {
  let component: SociaisComponent;
  let fixture: ComponentFixture<SociaisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SociaisComponent]
    });
    fixture = TestBed.createComponent(SociaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
