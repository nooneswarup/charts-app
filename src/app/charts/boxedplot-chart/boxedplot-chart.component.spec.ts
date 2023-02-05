import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxedplotChartComponent } from './boxedplot-chart.component';

describe('BoxedplotChartComponent', () => {
  let component: BoxedplotChartComponent;
  let fixture: ComponentFixture<BoxedplotChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxedplotChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxedplotChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
