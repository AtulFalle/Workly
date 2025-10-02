import { Route } from '@angular/router';
import { loadRemote } from '@module-federation/enhanced/runtime';

export const appRoutes: Route[] = [
  {
    path: 'authentication',
    loadChildren: () =>
      loadRemote<typeof import('authentication/Routes')>(
        'authentication/Routes'
      ).then((m) => m?.remoteRoutes ?? []),
  },
];
