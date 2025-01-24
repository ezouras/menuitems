import { Routes } from '@angular/router';
import { ContentprojectionComponent } from './contentprojection/contentprojection.component';
import { ParentChildComponent } from './parentchild/parent-child.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { component: HomeComponent, path: '' },
  {
    component: ContentprojectionComponent,
    path: 'content-projection',
  },
  { component: ParentChildComponent, path: 'parent-child' },
];
