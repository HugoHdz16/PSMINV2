import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { IndexComponent } from './components/index/index.component';
import { AgregarComponent } from './components/agregar/agregar.component';
import { EditarComponent } from './components/editar/editar.component';
import { EtiquetaComponent } from './components/etiqueta/etiqueta.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  {
    path:'login',component: LoginComponent,
  },
  { 
    path: 'index', component: IndexComponent 
  },
  { 
    path: 'agregar', component: AgregarComponent 
  },
  { 
    path: 'editar', component: EditarComponent 
  },
  { 
    path: 'etiqueta', component: EtiquetaComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
