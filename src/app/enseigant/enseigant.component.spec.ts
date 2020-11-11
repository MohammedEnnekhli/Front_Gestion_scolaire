import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnseigantComponent } from './enseigant.component';

describe('EnseigantComponent', () => {
  let component: EnseigantComponent;
  let fixture: ComponentFixture<EnseigantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnseigantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnseigantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
