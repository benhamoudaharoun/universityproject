import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cours } from 'src/app/model/cours';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css']
})
export class CoursComponent implements OnInit {

  constructor(
    private coursservice: ServiceService,
    private route:ActivatedRoute,
    private router:Router
    ) {}
    cours:Cours[]=[]
  ngOnInit(): void {
    this.getALLCours

  }
  getALLCours(){
    this.coursservice.getALLCours().subscribe(
      data=>{console.log(data)
      this.cours=data;
      })
  }
  
  
  
}
