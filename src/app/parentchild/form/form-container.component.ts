import { Component, OnInit } from '@angular/core';
import { FormItem, FormService } from '../../form.service';
import { FormItemComponent } from './form-item/form-item.component';

@Component({
  selector: 'app-form-container',
  standalone: true,
  imports: [FormItemComponent],
  templateUrl: './form-container.component.html',
  styleUrl: './form-container.component.scss',
})
export class FormContainerComponent implements OnInit {
  formItems: FormItem[] = [];
  constructor(private formService: FormService) {}

  ngOnInit() {
    this.formItems = this.formService.getFormItems();
  }

  onFilterChange(event: any) {
    console.log(event);
  }
}
