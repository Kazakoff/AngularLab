import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupcompComponent } from './groupcomp.component';

describe('GroupcompComponent', () => {
  let component: GroupcompComponent;
  let fixture: ComponentFixture<GroupcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
