import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {CategorieCours } from '../model/catgorie';
import { Cours } from '../model/cours';
import { Enseignant } from '../model/enseignant';
import { Etudiant } from '../model/etudiant';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private host = 'http://localhost:9594/University/';

  constructor(private http: HttpClient) { }

  getAllEtudiants():Observable<Etudiant[]>{
    
    
    return this.http.get<Etudiant[]>(this.host+"etudiant");
    
     }

     deleteEtudiant(id:number):Observable<void>{
       return this.http.delete<void>(this.host+"Etudiant/"+id);
     }
     AjouterEtudiant(etudiant:Etudiant):Observable<Etudiant[]>{
       return this.http.post<Etudiant[]>(this.host+"Etudiant",etudiant)
     }
     getEtudiantById(id :number):Observable<Etudiant>{

      
       let a=this.http.get<Etudiant>(this.host+"etudiant/"+id)
       return a
     }
     updateEtudiant(etudiant:Etudiant,id:Number):Observable<Etudiant[]>{
      return this.http.put<Etudiant[]>(this.host+ "Etudiant/" +id, etudiant)
    }
    getAllEnseignant():Observable<Enseignant[]>{
    
    
      return this.http.get<Enseignant[]>(this.host+"Enseignant");
      
       }
       AjouterEnseignant(enseignant:Enseignant):Observable<Enseignant[]>{
         let  a= this.http.post<Enseignant[]>(this.host+"Enseignant",enseignant)
          
           console.log(a)
           return a
       }
       deleteEnseignant(id:number):Observable<void>{
        return this.http.delete<void>(this.host+"Enseignant/"+id);
      }
      getEnseignantById(id:number):Observable<Enseignant>{
        return this.http.get<Enseignant>(this.host+"Enseignant/"+id)

      }
      updateEnseignant(enseignant:Enseignant,id:number):Observable<Enseignant[]>{
        return  this.http.put<Enseignant[]>(this.host+"Enseignant/"+id,enseignant)
      }
      getAllCategories():Observable<CategorieCours[]>{
        return this.http.get<CategorieCours[]>(this.host+"CategorieCours")
      }
      AjouterCategorieCours(categorie:CategorieCours):Observable<CategorieCours[]>{
        return this.http.post<CategorieCours[]>(this.host+"CategorieCours",categorie)
      }
      deleteCategorieCours(id:number):Observable<void>{
        return this.http.delete<void>(this.host+"CategorieCours/"+id)
      }
      getALLCours():Observable<Cours[]>{
    
    
        return this.http.get<Cours[]>(this.host+"Cours");
        
         }
    
    }
