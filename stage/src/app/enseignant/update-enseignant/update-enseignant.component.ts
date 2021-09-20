import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Enseignant } from 'src/app/model/enseignant';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-update-enseignant',
  templateUrl: './update-enseignant.component.html',
  styleUrls: ['./update-enseignant.component.css']
})
export class UpdateEnseignantComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private Enseignantservice: ServiceService,private router: Router,
    private ar:ActivatedRoute) { }
    id!:any;
    enseignant: Enseignant = new Enseignant(0,"","","","");
  ngOnInit(): void {
    this.id=this.ar.snapshot.paramMap.get('id');
    
    this.Enseignantservice.getEnseignantById(this.id).subscribe(
     
      Res=>{let x:any=Res 
       this.enseignant=x}
       )



  }
done1(f:NgForm){
let info=f.value
let ens= new Enseignant(-1,info.name,info.phone,info.matiere,info.address)
this.Enseignantservice.updateEnseignant(ens,this.id).subscribe(
  data=>{
    this.router.navigateByUrl('enseignant');
  }
  )



}
}
