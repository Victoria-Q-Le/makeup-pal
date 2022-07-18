import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApptItemComponent } from './appt-item.component';

describe('ApptItemComponent', () => {
  let component: ApptItemComponent;
  let fixture: ComponentFixture<ApptItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApptItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApptItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
