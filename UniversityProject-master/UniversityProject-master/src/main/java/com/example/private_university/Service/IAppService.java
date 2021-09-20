package com.example.private_university.Service;
import com.example.private_university.Entity.CategorieCours;
import com.example.private_university.Entity.Cours;
import com.example.private_university.Entity.Enseignant;
import com.example.private_university.Entity.Etudiant;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.util.List;

public interface IAppService {


    public void AjouterEnseignant(Enseignant e);
    public void AjouterEtudiant(Etudiant e);
    public List<Enseignant> getAllEnseignants();
    public List<Etudiant> getAllEtudiants();
    public List<CategorieCours>getAllCategories();
    public List<Cours>getALLCours ();
    public void SupprimerEnseignant(Long idEn);
    public void SupprimerEtudiant(Long idEt);
    public void ajouterSupportCours(String cours , MultipartFile file)throws Exception ;
    public Enseignant getEnseignantById(Long idEnseignant);
    public Etudiant getEtudiantById(Long idEtudiant);
    public byte[] getFile(Long idCours) throws IOException;
    public List<Cours> getCoursByCat (Long idC);
    public void SupprimerCategorieCours(Long idC);
    public CategorieCours getCategorieCoursbyId(Long idC);
    public void UpdateCours(Cours cour , Long idCours);
    public Cours getCoursbyId(Long idc);
    public  Etudiant updateEtudiant(Etudiant etudiant);
    public Enseignant  updateEnseignant(Enseignant enseignant);
    public void AjouterCategorieCours(CategorieCours  cc);



}
