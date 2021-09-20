import { Component, OnInit } from '@angular/core';
import { Etudiant } from 'src/app/model/etudiant';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  etudiants!:Etudiant[]
 
  constructor(private studentService: ServiceService) { }

  ngOnInit(): void {
    this.getAllEtudiants()
  }

  getAllEtudiants(){
    this.studentService.getAllEtudiants().subscribe(
      data=>this.etudiants=data
    );
  }
  deleteEtudiant(id:number){
    this.studentService.deleteEtudiant(id).subscribe(
      response=>this.getAllEtudiants()
      );
    
  }

}
