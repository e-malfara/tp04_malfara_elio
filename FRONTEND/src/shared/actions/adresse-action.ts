import { Adresse } from "src/app/modele/adresse";

export class AddAdresse {
  static readonly type = '[Adresse] Add';

  constructor(public payload: Adresse) {}
}

export class RemoveAdresse {
  static readonly type = '[Adresse] Remove';

  constructor(public payload: Adresse) {}
}