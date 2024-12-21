import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindAndReplaceComponent } from './find-and-replace.component';

describe('FindAndReplaceComponent', () => {
  let component: FindAndReplaceComponent;
  let fixture: ComponentFixture<FindAndReplaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FindAndReplaceComponent]
    });
    fixture = TestBed.createComponent(FindAndReplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
