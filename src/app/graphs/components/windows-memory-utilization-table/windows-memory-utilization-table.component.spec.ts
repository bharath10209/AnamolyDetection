import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowsMemoryUtilizationTableComponent } from './windows-memory-utilization-table.component';

describe('WindowsMemoryUtilizationTableComponent', () => {
  let component: WindowsMemoryUtilizationTableComponent;
  let fixture: ComponentFixture<WindowsMemoryUtilizationTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindowsMemoryUtilizationTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindowsMemoryUtilizationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
