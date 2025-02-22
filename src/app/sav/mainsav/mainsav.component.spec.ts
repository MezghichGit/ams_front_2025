import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainsavComponent } from './mainsav.component';

describe('MainsavComponent', () => {
  let component: MainsavComponent;
  let fixture: ComponentFixture<MainsavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainsavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainsavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
