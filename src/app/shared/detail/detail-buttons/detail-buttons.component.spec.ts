import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailButtonsComponent } from './detail-buttons.component';

describe('DetailButtonsComponent', () => {
  let component: DetailButtonsComponent;
  let fixture: ComponentFixture<DetailButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailButtonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
