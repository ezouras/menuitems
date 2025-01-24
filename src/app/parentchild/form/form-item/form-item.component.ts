import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormItem, FormService } from '../../../form.service';

@Component({
  standalone: true,
  selector: 'app-form-item',
  templateUrl: './form-item.component.html',
  styleUrl: './form-item.component.scss',
})
export class FormItemComponent implements OnInit {
  @Input() formItem!: FormItem;
  @Output() formItemChange = new EventEmitter<any>();
  onFormItemChange(event: any) {
    this.formItemChange.emit(event);
    console.log(event);
  }
  ngOnInit() {
    console.log('FilterItemComponent initialized');
  }
}
