import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentDayForecastComponent } from './current-day-forecast.component';

describe('CurrentDayForecastComponent', () => {
  let component: CurrentDayForecastComponent;
  let fixture: ComponentFixture<CurrentDayForecastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentDayForecastComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentDayForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
