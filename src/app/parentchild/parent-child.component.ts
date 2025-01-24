import { Component } from '@angular/core';
import { FormContainerComponent } from './form/form-container.component';

@Component({
  selector: 'app-parent-child',
  standalone: true,
  imports: [FormContainerComponent],
  templateUrl: './parent-child.component.html',
  styleUrl: './parent-child.component.scss',
})
export class ParentChildComponent {}
