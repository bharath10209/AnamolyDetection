import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataLinuxComponentComponent } from './data-linux-component.component';

describe('DataLinuxComponentComponent', () => {
  let component: DataLinuxComponentComponent;
  let fixture: ComponentFixture<DataLinuxComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataLinuxComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataLinuxComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
