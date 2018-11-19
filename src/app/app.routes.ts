import { RouterModule } from '@angular/router';

const routes = [
  { path: '', loadChildren: 'app/homepage/homepage.module#HomepageModule' },
  { path: 'details', loadChildren: 'app/aboutus/aboutus.module#AboutusModule'},
];

export const appRoutes =   RouterModule.forRoot(routes);
