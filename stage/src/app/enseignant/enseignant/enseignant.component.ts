import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Enseignant } from 'src/app/model/enseignant';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-enseignant',
  templateUrl: './enseignant.component.html',
  styleUrls: ['./enseignant.component.css']
})
export class EnseignantComponent implements OnInit {
  enseignants: Enseignant[] = [];
  constructor(
    private enseignantservice: ServiceService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.getAllEnseignant()
  }
  getAllEnseignant(){
    this.enseignantservice.getAllEnseignant().subscribe(
      data=>this.enseignants=data
  );
  }
  deleteEnseignant(id:number){
    this.enseignantservice.deleteEnseignant(id).subscribe(
      data=>this.getAllEnseignant()
    );
}
}