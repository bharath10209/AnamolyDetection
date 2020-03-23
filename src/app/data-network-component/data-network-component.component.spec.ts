import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataNetworkComponentComponent } from './data-network-component.component';

describe('DataNetworkComponentComponent', () => {
  let component: DataNetworkComponentComponent;
  let fixture: ComponentFixture<DataNetworkComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataNetworkComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataNetworkComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
