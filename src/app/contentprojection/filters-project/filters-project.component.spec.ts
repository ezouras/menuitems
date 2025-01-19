import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersProjectComponent } from './filters-project.component';

describe('FiltersProjectComponent', () => {
  let component: FiltersProjectComponent;
  let fixture: ComponentFixture<FiltersProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltersProjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltersProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
