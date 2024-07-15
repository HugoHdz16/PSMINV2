import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegistrarComponent } from './components/auth/registrar/registrar.component';
import { IndexComponent } from './components/index/index.component';

// Importaciones de Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { EditarComponent } from './components/editar/editar.component';
import { AgregarComponent } from './components/agregar/agregar.component';
import { EtiquetaComponent } from './components/etiqueta/etiqueta.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrarComponent,
    IndexComponent,
    EditarComponent,
    AgregarComponent,
    EtiquetaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, // Agregado
    MatMenuModule,           // Agregado
    MatButtonModule,         // Agregado
    MatIconModule            // Agregado
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
