import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Adresse } from 'src/app/modele/adresse';
import { RemoveAdresse } from 'src/shared/actions/adresse-action';
import { AdresseState } from 'src/shared/states/adresse-state';
@Component({
  selector: 'app-liste-adresses',
  templateUrl: './liste-adresses.component.html',
  styleUrls: ['./liste-adresses.component.css'],
})
export class ListeAdressesComponent implements OnInit {
  constructor(private store: Store) {}

  @Select(AdresseState.getListeAdresses) liste$!: Observable<Adresse[]>;
  ngOnInit() {}

  removeAdresse(adresse: Adresse) {
    this.store.dispatch(new RemoveAdresse(adresse));
  }
}