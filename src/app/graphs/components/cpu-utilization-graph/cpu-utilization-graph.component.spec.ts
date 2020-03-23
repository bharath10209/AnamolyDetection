import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpuUtilizationGraphComponent } from './cpu-utilization-graph.component';

describe('CpuUtilizationGraphComponent', () => {
  let component: CpuUtilizationGraphComponent;
  let fixture: ComponentFixture<CpuUtilizationGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpuUtilizationGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpuUtilizationGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
