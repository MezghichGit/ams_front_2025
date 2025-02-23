import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RFRegistrationComponent } from './rfregistration.component';

describe('RFRegistrationComponent', () => {
  let component: RFRegistrationComponent;
  let fixture: ComponentFixture<RFRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RFRegistrationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RFRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
