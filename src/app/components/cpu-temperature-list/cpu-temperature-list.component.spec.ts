import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpuTemperatureListComponent } from './cpu-temperature-list.component';

describe('CpuTemperatureListComponent', () => {
  let component: CpuTemperatureListComponent;
  let fixture: ComponentFixture<CpuTemperatureListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpuTemperatureListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpuTemperatureListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
