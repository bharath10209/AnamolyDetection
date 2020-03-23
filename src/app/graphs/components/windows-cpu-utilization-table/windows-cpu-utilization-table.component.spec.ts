import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowsCpuUtilizationTableComponent } from './windows-cpu-utilization-table.component';

describe('WindowsCpuUtilizationTableComponent', () => {
  let component: WindowsCpuUtilizationTableComponent;
  let fixture: ComponentFixture<WindowsCpuUtilizationTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindowsCpuUtilizationTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindowsCpuUtilizationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
