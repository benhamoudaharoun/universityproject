package com.example.private_university.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

@Entity @NoArgsConstructor @AllArgsConstructor @Data
public class Etudiant  {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id  ;
    private String name ;
    private double moyenne ;
    @Column(name = "phone_number")
    private String phone;

    @Column(name = "age")
    private String age;

    @Column(name = "address")
    private String address;

    @CreationTimestamp
    @Column(name = "date_created")
    private Date dateCreated;

    @UpdateTimestamp
    @Column(name = "date_updated")
    private Date dateUpdated;

}
