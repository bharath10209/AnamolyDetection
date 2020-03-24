import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpuLinuxUtilisationComponent } from './cpu-linux-utilisation.component';

describe('CpuLinuxUtilisationComponent', () => {
  let component: CpuLinuxUtilisationComponent;
  let fixture: ComponentFixture<CpuLinuxUtilisationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpuLinuxUtilisationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpuLinuxUtilisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
