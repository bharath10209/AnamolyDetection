import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketCounterGraphComponent } from './ticket-counter-graph.component';

describe('TicketCounterGraphComponent', () => {
  let component: TicketCounterGraphComponent;
  let fixture: ComponentFixture<TicketCounterGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketCounterGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketCounterGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
