import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AddProduit } from 'src/shared/actions/produit-action';
import { Produit } from '../../modele/produit';
import { ProduitsService } from '../../service/produits.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  constructor(private produitsService: ProduitsService, private store: Store) { }

  public listeProduits?: Observable<Array<Produit>>;

  ngOnInit(): void {
    this.listeProduits = this.produitsService.getProduits();
  }
  addProduit(produit: Produit) {
    this.store.dispatch(new AddProduit(produit));
  }

}
