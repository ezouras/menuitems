import { Routes } from '@angular/router';
import { ContentprojectionComponent } from './contentprojection/contentprojection.component';
import { ParentchildComponent } from './parentchild/parentchild.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { component: HomeComponent, path: '' },
  {
    component: ContentprojectionComponent,
    path: 'content-projection',
  },
  { component: ParentchildComponent, path: 'parent-child' },
];
