import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatiereAdminComponent } from './matiere-admin.component';

describe('MatiereAdminComponent', () => {
  let component: MatiereAdminComponent;
  let fixture: ComponentFixture<MatiereAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatiereAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatiereAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
