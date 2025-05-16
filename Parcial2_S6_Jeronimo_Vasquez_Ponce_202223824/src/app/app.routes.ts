import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'airlines', pathMatch: 'full' },
  {
    path: 'airlines',
    loadChildren: () =>
      import('./airlines/airlines.module').then(m => m.AirlinesModule)
  }
];

