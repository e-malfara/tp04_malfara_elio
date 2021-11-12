import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdresseComponent } from './adresse/adresse.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListeAdressesComponent } from './liste-adresses/liste-contacts.component';
import { NgxsModule } from '@ngxs/store';
import { AdresseState } from 'src/shared/states/adresse-state';

const appChild: Routes = [
  {
    path: 'saisieAdresse',
    component: AdresseComponent,
  },
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(appChild),
    ReactiveFormsModule,
    NgxsModule.forFeature([AdresseState]),
  ],

  declarations: [
    AdresseComponent,
    ListeAdressesComponent,
  ],
})

export class AdresseModule { }
