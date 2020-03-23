import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowsMemoryUtilizationGraphComponent } from './windows-memory-utilization-graph.component';

describe('WindowsMemoryUtilizationGraphComponent', () => {
  let component: WindowsMemoryUtilizationGraphComponent;
  let fixture: ComponentFixture<WindowsMemoryUtilizationGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindowsMemoryUtilizationGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindowsMemoryUtilizationGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
