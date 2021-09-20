package com.example.private_university.Entity;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity @NoArgsConstructor @AllArgsConstructor @Data
public class Cours {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id ;
    private String name ;
    private String file ;
    @ManyToOne
    private Enseignant enseignant;
    @ManyToOne
    private CategorieCours categorieCours ;
}
