package com.example.private_university.Service;
import com.example.private_university.Entity.CategorieCours;
import com.example.private_university.Entity.Cours;
import com.example.private_university.Entity.Enseignant;
import com.example.private_university.Entity.Etudiant;
import com.example.private_university.dao.CategorieCoursRepository;
import com.example.private_university.dao.CoursRepository;
import com.example.private_university.dao.EnseignantRepository;
import com.example.private_university.dao.EtudiantRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.transaction.Transactional;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

@Service
@Transactional
public class ServiceApp implements IAppService {

    @Autowired
    EnseignantRepository en ;
    @Autowired
    EtudiantRepository et ;
    @Autowired
    CoursRepository c ;
    @Autowired
    CategorieCoursRepository cr;

    public void AjouterEnseignant(Enseignant e){
        en.save(e);
    }
    public void AjouterEtudiant(Etudiant e){
        et.save(e);
    }
    public List<Enseignant> getAllEnseignants(){
        return en.findAll();
    }

    public List<Etudiant> getAllEtudiants(){
        return et.findAll();
    }
    public void SupprimerEnseignant(Long idEn){
        Enseignant e = en.findById(idEn).get();
        for(Cours c : e.getCours()){
            c.setEnseignant(null);
        }
        en.delete(e);

    }
    public void SupprimerEtudiant(Long idEt){
        et.deleteById(idEt);
    }

    public Enseignant getEnseignantById(Long idEnseignant){
        return en.findById(idEnseignant).get();
    }
    public Etudiant getEtudiantById(Long idEtudiant){
        return et.findById(idEtudiant).get();
    }
    public CategorieCours getCategorieCoursbyId(Long idC){
        return cr.findById(idC).get();
    }

    public Cours getCoursbyId(Long idc){
        return c.findById(idc).get();
    }


    public List<Cours> getCoursByCat (Long idC){
        CategorieCours c = cr.findById(idC).get();
        return c.getCours();
    }
    public void SupprimerCategorieCours(Long idC){
        CategorieCours ct = cr.findById(idC).get();
        for(Cours c : ct.getCours()){
            c.setCategorieCours(null);
        }
        cr.delete(ct);
    }

    public void UpdateCours(Cours cour , Long idCours){
        cour.setId(idCours);
        c.save(cour);
    }

    public void ajouterSupportCours(String cours , MultipartFile file)throws Exception {
        Cours cou = new ObjectMapper().readValue(cours,Cours.class); // objet vers json ya haroun
        //String nomFile=uploadcours(file);
        String nomFile=file.getOriginalFilename();
        cou.setFile(nomFile);
        
        c.save(cou);
    }

    private String uploadcours(MultipartFile file ) throws IOException {
    	
        String nomFile = file.getOriginalFilename();
        String tab[] = nomFile.split("\\.");
        String nomModif = tab[0]+System.currentTimeMillis()+"."+tab[1];
        File f = new File(System.getProperty("user.home")+"/files/"+nomModif);
        FileOutputStream fos = new FileOutputStream(f);
        fos.write(file.getBytes());
        return  nomModif ;
    }
    public byte[] getFile(Long idCours) throws IOException{
        String fileNom=c.findById(idCours).get().getFile();
        File f=new File(System.getProperty("user.home")+"/files/"+fileNom);
        Path p = Paths.get(f+"");
        return Files.readAllBytes(p);

    }
	@Override
	public Etudiant updateEtudiant(Etudiant etudiant) {
		// TODO Auto-generated method stub
		return et.save(etudiant);
	}
	@Override
	public Enseignant updateEnseignant(Enseignant enseignant) {
		// TODO Auto-generated method stub
		return en.save(enseignant);
	}
	public List<CategorieCours>getAllCategories(){
		return cr.findAll();
	}
	 public void AjouterCategorieCours(CategorieCours  cc) {
		 cr.save(cc);
	 }
	 public  List<Cours>getALLCours(){
		return c.findAll();
	 }
	
	
}
