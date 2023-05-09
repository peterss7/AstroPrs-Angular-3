import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsEditComponent } from './buttons-edit.component';

describe('ButtonsEditComponent', () => {
  let component: ButtonsEditComponent;
  let fixture: ComponentFixture<ButtonsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonsEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
