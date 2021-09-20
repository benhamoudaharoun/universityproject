import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule, HttpHeaderResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student/student.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UpdateComponent } from './student/update/update.component';
import { AddComponent } from './student/add/add.component';
import { EnseignantComponent } from './enseignant/enseignant/enseignant.component';
import { UpdateEnseignantComponent } from './enseignant/update-enseignant/update-enseignant.component';
import { AddEnseignantComponent } from './enseignant/add-enseignant/add-enseignant.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategorieComponent } from './categorie_cours/categorie/categorie.component';
import { AddCategorieComponent } from './categorie_cours/add-categorie/add-categorie.component';
import { UpdateCategorieComponent } from './categorie_cours/update-categorie/update-categorie.component';
import { CoursComponent } from './cours/cours/cours.component';
import { CoursUpdateComponent } from './cours/cours-update/cours-update.component';
import { CoursAddComponent } from './cours/cours-add/cours-add.component';
import { RegisterComponent } from './register/register/register.component';
import { ContentComponent } from './content/content/content.component';
@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    HeaderComponent,
    FooterComponent,
    UpdateComponent,
    AddComponent,
    EnseignantComponent,
    UpdateEnseignantComponent,
    AddEnseignantComponent,
    CategorieComponent,
    AddCategorieComponent,
    UpdateCategorieComponent,
    CoursComponent,
    CoursUpdateComponent,
    CoursAddComponent,
    RegisterComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
