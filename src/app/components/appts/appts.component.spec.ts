import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApptsComponent } from './appts.component';

describe('ApptsComponent', () => {
  let component: ApptsComponent;
  let fixture: ComponentFixture<ApptsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApptsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
