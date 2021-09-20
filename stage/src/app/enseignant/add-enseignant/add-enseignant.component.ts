import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Enseignant } from 'src/app/model/enseignant';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-add-enseignant',
  templateUrl: './add-enseignant.component.html',
  styleUrls: ['./add-enseignant.component.css']
})
export class AddEnseignantComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private serviceEnseignant: ServiceService,
    private router: Router,
    private ar:ActivatedRoute) { }

  ngOnInit(): void {
  }

  done3(f:NgForm){
    let info=f.value;
    
    
    let  stu = new Enseignant(-1,info.name,info.phone,info.matiere,info.address,);
    
    this.serviceEnseignant.AjouterEnseignant(stu).subscribe(data=>{
      this.router.navigateByUrl('enseignant');
    }
    )



}
}
