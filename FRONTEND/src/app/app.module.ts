import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LiensComponent } from './liens/liens.component';
import { RouterModule, Routes } from '@angular/router';
import { ProduitState } from 'src/shared/states/produits-state';
import { NgxsModule } from '@ngxs/store';

const appRoutes: Routes = [
  {
    path: 'produits',
    loadChildren: () =>
      import('./produits/produits.module').then((m) => m.ProduitsModule),
  },
  {
    path: 'contacts',
    loadChildren: () =>
      import('./adresses/adresse.module').then((m) => m.AdresseModule),
  },
];

@NgModule({
  declarations: [
    AppComponent,
    LiensComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    NgxsModule.forRoot([ProduitState]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
