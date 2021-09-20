import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategorieCours } from 'src/app/model/catgorie';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-add-categorie',
  templateUrl: './add-categorie.component.html',
  styleUrls: ['./add-categorie.component.css']
})
export class AddCategorieComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private serviceCategorie: ServiceService,
    private router: Router,
    private ar:ActivatedRoute) { }

  ngOnInit(): void {
  }
  done3(f:NgForm){
    let info=f.value;
    
    
    let  stu = new CategorieCours(-1,info.name);
    
    this.serviceCategorie. AjouterCategorieCours(stu).subscribe(data=>{
      this.router.navigateByUrl('categorie');
    }
    )



}
}
