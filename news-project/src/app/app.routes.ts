import { Routes } from '@angular/router';

import { WrapperComponent } from './wrapper/wrapper.component';


export const routes: Routes = [
  { path: '', component: WrapperComponent, pathMatch: 'full' },
  
];
