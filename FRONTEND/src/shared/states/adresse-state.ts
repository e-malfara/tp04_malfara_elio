import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { AddAdresse, RemoveAdresse } from '../actions/adresse-action';
import { AdresseStateModel } from './adresse-state-model';
@State<AdresseStateModel>({
  name: 'adresses',
  defaults: {
    adresses: [],
  },
})
@Injectable()
export class AdresseState {
  @Selector()
  static getNbAdresses(state: AdresseStateModel) {
    return state.adresses.length;
  }
  @Selector()
  static getListeAdresses(state: AdresseStateModel) {
    return state.adresses;
  }

  @Action(AddAdresse)
  add(
    { getState, patchState }: StateContext<AdresseStateModel>,
    { payload }: AddAdresse
  ) {
    const state = getState();
    patchState({
      adresses: [...state.adresses, payload],
    });
  }
  @Action(RemoveAdresse)
  remove(
    { getState, patchState }: StateContext<AdresseStateModel>,
    { payload }: RemoveAdresse
  ) {
    const state = getState();
    let etatAdresse = state.adresses;
    etatAdresse.splice(etatAdresse.indexOf(payload), 1);
    patchState({
        adresses: etatAdresse
    });
  }
}