import { Route } from '@angular/router';
import { RemoteEntry } from './entry';
import { LoginComponent } from '../login/login.component';

export const remoteRoutes: Route[] = [
    { path: '', component: RemoteEntry },
    { path: 'login', component: LoginComponent }
];
