import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {  CategorieCours } from 'src/app/model/catgorie';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {
  categories:CategorieCours[]=[]
  constructor(
    private Categorieservice:ServiceService,
    private route:ActivatedRoute,
    private router:Router
    ) {}


  ngOnInit(): void {
    this.getAllCategories()
  }

  getAllCategories(){
    this.Categorieservice.getAllCategories().subscribe(
      data=>this.categories=data
    )
  }
  deleteCategorieCours(id:number){
    this.Categorieservice.deleteCategorieCours(id).subscribe(
      res=>this.getAllCategories
    )
  }
}
