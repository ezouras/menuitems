import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterItemComponent } from './form-item.component';

describe('FilterItemComponent', () => {
  let component: FilterItemComponent;
  let fixture: ComponentFixture<FilterItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FilterItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
