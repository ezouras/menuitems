import { Injectable } from '@angular/core';
export interface FormItem {
  name: string;
  type: any;
  data?: any;
}

@Injectable({ providedIn: 'root' })
export class FormService {
  constructor() {}

  getFormItems(): FormItem[] {
    return [
      { name: 'Name:', type: 'input' },
      {
        name: 'Favorite Hobby',
        type: 'select',
        data: ['Soccer', 'Basketball', 'Tennis', 'Swimming', 'Running'],
      },
      { name: 'Birthdate', type: 'date' },
      { name: 'Gender', type: 'checkbox' },
      { name: 'Favorite Color', type: 'radio' },
      { name: 'find friends', type: 'typeahead' },
    ];
  }
}
