import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Produit } from 'src/app/modele/produit';
import { ProduitsService } from 'src/app/service/produits.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  id: number = 0;
  constructor(private produitsService: ProduitsService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.params.id;
  }

  public produit!: Observable<Produit>;

  ngOnInit(): void {
    this.produit = this.produitsService.getProduit(this.id);
  }

}
