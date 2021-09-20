import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Etudiant } from 'src/app/model/etudiant';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(
    private studentservice: ServiceService,
    private route:ActivatedRoute,
    private router:Router,
    private formBuilder: FormBuilder
    ) {}
    id!:any;
    etudiant: Etudiant = new Etudiant(0,"","","","");
  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('id');
    
    this.studentservice.getEtudiantById(this.id).subscribe(
     
      Res=>{let x:any=Res 
       this.etudiant=x}
       )
  }
  done1(f:NgForm){
    const info=f.value;
    
    const  etudiant = new Etudiant(this.id,info.name,info.age,info.phone,info.address);
    
    this.studentservice.updateEtudiant(etudiant,this.id).subscribe(
      data=>{
      this.router.navigateByUrl('student');
    }
    )
  }

}
