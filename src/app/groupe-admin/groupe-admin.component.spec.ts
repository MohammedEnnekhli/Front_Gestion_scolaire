import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupeAdminComponent } from './groupe-admin.component';

describe('GroupeAdminComponent', () => {
  let component: GroupeAdminComponent;
  let fixture: ComponentFixture<GroupeAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupeAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupeAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
