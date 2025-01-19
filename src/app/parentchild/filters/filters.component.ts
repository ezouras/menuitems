import { Component, OnInit } from '@angular/core';
import { Filter, FilterService } from '../../filter.service';
import { FilterItemComponent } from './filter-item/filter-item.component';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [FilterItemComponent],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss',
})
export class FiltersComponent implements OnInit {
  filters: Filter[] = [];
  constructor(private filterService: FilterService) {}

  ngOnInit() {
    this.filters = this.filterService.getFilters();
  }

  onFilterChange(event: any) {
    console.log(event);
  }
}
