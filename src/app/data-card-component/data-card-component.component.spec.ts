import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataCardComponentComponent } from './data-card-component.component';

describe('DataCardComponentComponent', () => {
  let component: DataCardComponentComponent;
  let fixture: ComponentFixture<DataCardComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataCardComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataCardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
