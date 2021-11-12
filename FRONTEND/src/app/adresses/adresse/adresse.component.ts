import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Store } from '@ngxs/store';
import { Adresse } from 'src/app/modele/adresse';
import { AddAdresse } from 'src/shared/actions/adresse-action';

@Component({
  selector: 'app-adresse',
  templateUrl: './adresse.component.html',
  styleUrls: ['./adresse.component.css']
})
export class AdresseComponent implements OnInit {

  adresseForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder, private store: Store) {
    this.adresseForm = this.formBuilder.group({
      numero: '',
      typeRue: '',
      nomRue: '',
      code: '',
      ville: '',
    });
  }

  ngOnInit() {}

  addAdresse() {
    let numero: string = this.adresseForm.value['numero'];
    let typeRue: string = this.adresseForm.value['typeRue'];
    let nomRue: string = this.adresseForm.value['nomRue'];
    let code: string = this.adresseForm.value['code'];
    let ville: string = this.adresseForm.value['ville'];

    let adresse: Adresse = new Adresse();

    adresse.numero = numero;
    adresse.typeRue = typeRue;
    adresse.nomRue = nomRue;
    adresse.code = code;
    adresse.ville = ville;

    this.adresseForm = this.formBuilder.group({
      numero: '',
      typeRue: '',
      nomRue: '',
      code: '',
      ville: '',
    });

    this.store.dispatch(new AddAdresse(adresse));
  }

}
