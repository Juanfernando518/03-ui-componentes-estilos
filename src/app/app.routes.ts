import { Routes } from '@angular/router';
import { EstilosPage } from './features/estilos-page/estilos-page';
import { DaisyuiPage } from './features/daisyui-page/daisyui-page';
import { Drawer } from './features/daisyui-page/components/drawer/drawer';
import { SimpsonsPageComponent } from './features/simpsons-page/simpsons-page';
import { SimpsonDetailPageComponent } from './features/simpson-detail-page/simpson-detail-page';
import { SignalBoxComponent } from './features/SignalBoxComponent/SignalBoxComponent';
import { PaginationComponent } from './features/simpsons/PaginationComponent/PaginationComponent';


export const routes: Routes = [
  {
    path: '',
    component: DaisyuiPage
  },
  {
    path: '',
    component: EstilosPage
  },
  {
  
    path: 'estilos',
    component: EstilosPage
  },
  {
    path:'',
    component: SignalBoxComponent
  },
  {
  path: 'simpsons',
  component: SimpsonsPageComponent,
},
{
  path: 'simpsons/:id',
  component: SimpsonDetailPageComponent,
},
{
  path: '',
  component: PaginationComponent
}

];