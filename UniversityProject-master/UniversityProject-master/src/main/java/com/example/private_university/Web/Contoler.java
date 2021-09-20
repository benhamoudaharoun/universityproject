package com.example.private_university.Web;


import com.example.private_university.Entity.CategorieCours;
import com.example.private_university.Entity.Cours;
import com.example.private_university.Entity.Enseignant;
import com.example.private_university.Entity.Etudiant;
import com.example.private_university.Service.IAppService;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.awt.*;
import java.io.IOException;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/University")
public class Contoler {
    @Autowired
    IAppService service ;


    @PostMapping("/Etudiant")
    public void AjouterEtudiant(@RequestBody Etudiant e){
        service.AjouterEtudiant(e);

    }
    @PostMapping("/CategorieCours")
    public void AjouterCategorieCours(@RequestBody CategorieCours cc){
        service.AjouterCategorieCours(cc);

    }
    @GetMapping("/etudiant/{id}")
    public Etudiant getEtudiantById(@PathVariable  Long id){
        return service.getEtudiantById(id);
    }

@PostMapping("/Enseignant")
public void AjouterEnseignant(@RequestBody Enseignant e){
    service.AjouterEnseignant(e); }

    @GetMapping("/Enseignant/{id}")
    public Enseignant getEnseignantById(@PathVariable Long id){
        return service.getEnseignantById(id);
    }
    @GetMapping("/etudiant")
    public List<Etudiant> getAllEtudiants(){
        return  service.getAllEtudiants();
    }
    @GetMapping("/Enseignant")
    public List<Enseignant> getAllEnseignant(){
        return  service.getAllEnseignants();
    }
    @GetMapping("/CategorieCours")
    public List<CategorieCours>getAllCategories(){
    	return service.getAllCategories();
    }

    @DeleteMapping("Etudiant/{id}")
    public void deleteEtudiant(@PathVariable  Long id){
        service.SupprimerEtudiant(id);
    }
    @DeleteMapping("Enseignant/{id}")
    public void deleteEnseignant(@PathVariable  Long id ){
        service.SupprimerEnseignant(id);
    }

    @DeleteMapping("/CategorieCours/{id}")
    public void deleteCategorieCours(@PathVariable  Long id){
        service.SupprimerCategorieCours(id);
    }
    @GetMapping("/CategorieCours/{id}")
    public CategorieCours getCategorieCoursbyId(@PathVariable  Long id){
        return service.getCategorieCoursbyId(id);

    }
    @GetMapping("/Cours")
    public List<Cours> getALLCours(){
        return service.getALLCours();
    }
    @GetMapping("/CoursByCat/{id}")
    public List<Cours> getCoursByCat (Long id){
        return service.getCoursByCat(id);
    }
    @PostMapping("/Cours")
    public void ajouterSupportCours(@RequestParam( name="c", required = false) String cours ,@RequestParam(name= "f", required = false) MultipartFile file)throws Exception{
        service.ajouterSupportCours(cours, file);
    }

    @PutMapping("Cours/{id}")
    public void UpdateCours(@RequestBody  Cours cour , @PathVariable Long idCours){
        service.UpdateCours(cour,idCours);
    }

    @GetMapping(value = "/File/{id},",produces = MediaType.ALL_VALUE)
    public byte[] getFile(@PathVariable Long id) throws IOException{
       return service.getFile(id);
    }
 @PutMapping("Etudiant/{id}")
 public Etudiant updateEtudiant(@RequestBody Etudiant etudiant,@PathVariable Long id) {
	 etudiant.setId(id);
	 return service.updateEtudiant(etudiant);
 }

 @PutMapping("Enseignant/{id}")
 public Enseignant updateEnseignant(@RequestBody Enseignant enseignant , @PathVariable Long id) {
	 enseignant.setId(id);
	 return service.updateEnseignant(enseignant);
 }

}
