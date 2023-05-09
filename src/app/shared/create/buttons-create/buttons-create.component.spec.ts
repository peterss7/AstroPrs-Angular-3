import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsCreateComponent } from './buttons-create.component';

describe('ButtonsCreateComponent', () => {
  let component: ButtonsCreateComponent;
  let fixture: ComponentFixture<ButtonsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonsCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
