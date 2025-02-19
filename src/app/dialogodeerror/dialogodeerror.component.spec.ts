import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogodeerrorComponent } from './dialogodeerror.component';

describe('DialogodeerrorComponent', () => {
  let component: DialogodeerrorComponent;
  let fixture: ComponentFixture<DialogodeerrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogodeerrorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogodeerrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
