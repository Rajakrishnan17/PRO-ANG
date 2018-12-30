import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleschartComponent } from './saleschart.component';

describe('SaleschartComponent', () => {
  let component: SaleschartComponent;
  let fixture: ComponentFixture<SaleschartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleschartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleschartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
