import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterItemProjectComponent } from './filter-item-project.component';

describe('FilterItemProjectComponent', () => {
  let component: FilterItemProjectComponent;
  let fixture: ComponentFixture<FilterItemProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterItemProjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterItemProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
