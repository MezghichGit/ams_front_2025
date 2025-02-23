import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TFRegistrationComponent } from './tfregistration.component';

describe('TFRegistrationComponent', () => {
  let component: TFRegistrationComponent;
  let fixture: ComponentFixture<TFRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TFRegistrationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TFRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
