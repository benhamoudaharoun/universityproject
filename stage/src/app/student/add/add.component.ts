import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Etudiant } from 'src/app/model/etudiant';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private serviceStudent: ServiceService,private router: Router,
    private ar:ActivatedRoute) { }


  ngOnInit(): void {
  }
  done(f:NgForm){
    let info=f.value;
    
    
    let  stu = new Etudiant(-1,info.name,info.age,info.phone,info.address);
    
    this.serviceStudent.AjouterEtudiant(stu).subscribe(data=>{
      this.router.navigateByUrl('student');
    }
    )



}
}