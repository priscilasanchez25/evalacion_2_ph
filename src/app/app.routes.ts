import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'citainicial',
    pathMatch: 'full',
  },
  {
    path: 'citainicial',
    loadComponent: () =>
      import('./paginas/citainicial/citainicial.page')
        .then(m => m.CitainicialPage),
  },
  {
    path: 'gestioncitas',
    loadComponent: () =>
      import('./paginas/gestioncitas/gestioncitas.page')
        .then(m => m.GestioncitasPage),
  },
  {
    path: 'configuraciones',
    loadComponent: () =>
      import('./paginas/configuraciones/configuraciones.page')
        .then(m => m.ConfiguracionesPage),
  }
   
];