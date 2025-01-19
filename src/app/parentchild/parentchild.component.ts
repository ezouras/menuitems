import { Component } from '@angular/core';
import { FiltersComponent } from './filters/filters.component';

@Component({
  selector: 'app-parentchild',
  standalone: true,
  imports: [FiltersComponent],
  templateUrl: './parentchild.component.html',
  styleUrl: './parentchild.component.scss',
})
export class ParentchildComponent {}
