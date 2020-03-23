import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForcastedTableComponent } from './forcasted-table.component';

describe('ForcastedTableComponent', () => {
  let component: ForcastedTableComponent;
  let fixture: ComponentFixture<ForcastedTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForcastedTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForcastedTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
