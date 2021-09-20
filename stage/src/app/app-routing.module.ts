import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategorieComponent } from './categorie_cours/add-categorie/add-categorie.component';
import { CategorieComponent } from './categorie_cours/categorie/categorie.component';
import { UpdateCategorieComponent } from './categorie_cours/update-categorie/update-categorie.component';
import { ContentComponent } from './content/content/content.component';
import { CoursAddComponent } from './cours/cours-add/cours-add.component';
import { CoursUpdateComponent } from './cours/cours-update/cours-update.component';
import { CoursComponent } from './cours/cours/cours.component';
import { AddEnseignantComponent } from './enseignant/add-enseignant/add-enseignant.component';
import { EnseignantComponent } from './enseignant/enseignant/enseignant.component';
import { UpdateEnseignantComponent } from './enseignant/update-enseignant/update-enseignant.component';
import { RegisterComponent } from './register/register/register.component';
import { LoginactivateService } from './services/loginactivate.service';
import { RouteactivateService } from './services/routeactivate.service';
import { AddComponent } from './student/add/add.component';
import { StudentComponent } from './student/student/student.component';
import { UpdateComponent } from './student/update/update.component';

const routes: Routes = [
  {path: 'student', component: StudentComponent},
  {path: 'update', component: UpdateComponent},
  {path: 'update/:id', component:UpdateComponent},
  {path: 'add', component: AddComponent},
  {path: 'add-enseignant', component: AddEnseignantComponent},
  {path: 'enseignant', component: EnseignantComponent,canActivate:[RouteactivateService]},
  {path: 'update-enseignant', component: UpdateEnseignantComponent,canActivate:[RouteactivateService]},
  {path: 'update-enseignant/:id', component: UpdateEnseignantComponent,canActivate:[RouteactivateService]},
  {path: 'add-categorie', component: AddCategorieComponent,canActivate:[RouteactivateService]},
  {path: 'categorie', component: CategorieComponent,canActivate:[RouteactivateService]},
  {path: 'update-categorie', component: UpdateCategorieComponent,canActivate:[RouteactivateService]},
  {path: 'update-categorie/:id', component: UpdateComponent,canActivate:[RouteactivateService]},
  {path: 'add-cours', component: CoursAddComponent,canActivate:[RouteactivateService] },
  {path: 'cours', component:CoursComponent,canActivate:[RouteactivateService]},
  {path: 'update-cours', component: CoursUpdateComponent},
  {path: 'update-cours/:id', component: CoursUpdateComponent},
  {path: 'register', component: RegisterComponent,canActivate:[LoginactivateService]},
  {
    path:"",component:StudentComponent,canActivate:[RouteactivateService]},
    {
      path:"**",component:StudentComponent,canActivate:[RouteactivateService]},
      {path: 'content', component: ContentComponent,canActivate:[LoginactivateService]},
  
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
