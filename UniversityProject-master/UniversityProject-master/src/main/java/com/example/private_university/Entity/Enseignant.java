package com.example.private_university.Entity;


import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Enseignant {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id  ;
    private String name ;
    private String matiere ;
    private String address;
    private String phone;
    @OneToMany(mappedBy = "enseignant")
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    List<Cours> Cours ;


}
