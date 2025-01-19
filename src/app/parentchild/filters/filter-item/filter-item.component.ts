import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Filter } from '../../../filter.service';

@Component({
  standalone: true,
  selector: 'app-filter-item',
  templateUrl: './filter-item.component.html',
  styleUrl: './filter-item.component.scss',
})
export class FilterItemComponent implements OnInit {
  @Input() filter!: Filter;
  @Output() filterChange = new EventEmitter<any>();
  onFilterChange(event: any) {
    this.filterChange.emit(event);
    console.log(event);
  }
  ngOnInit() {
    console.log('FilterItemComponent initialized');
  }
}
