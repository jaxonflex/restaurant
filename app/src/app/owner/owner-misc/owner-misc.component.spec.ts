import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerMiscComponent } from './owner-misc.component';

describe('OwnerMiscComponent', () => {
  let component: OwnerMiscComponent;
  let fixture: ComponentFixture<OwnerMiscComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerMiscComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerMiscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
