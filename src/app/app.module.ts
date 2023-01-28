import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibroListaComponent } from './libro-lista/libro-lista.component';
import { AutorListaComponent } from './autor-lista/autor-lista.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { 
    path: 'libros',
    component: LibroListaComponent
  },
  {
    path: 'autores',
    component: AutorListaComponent
  },
  {
    path: '',
    redirectTo: '/libros',
    pathMatch: 'full' // <-- this is the default if the url is empty
  },
  {
    path: '**', // <-- this is the default if the url is not found
    component: NotFoundComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LibroListaComponent,    AutorListaComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
