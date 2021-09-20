package com.example.private_university.Entity;


import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity @Data @AllArgsConstructor @NoArgsConstructor
public class CategorieCours {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id ;
    private String name ;

    @OneToMany (mappedBy = "categorieCours")
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    List<Cours> cours ;

}
