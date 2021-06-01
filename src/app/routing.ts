import { Routes, RouterModule } from '@angular/router';
import { BodyOnliveComponent } from './body-onlive/body-onlive.component';
import { BodyReplayComponent } from './body-replay/body-replay.component';
import { BodyReservedComponent } from './body-reserved/body-reserved.component';


const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full'},
  { path: 'replay', component: BodyReplayComponent },
  { path: 'onlive', component: BodyOnliveComponent },
  { path: 'reserved', component: BodyReservedComponent },
];

export const routing = RouterModule.forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy' });
