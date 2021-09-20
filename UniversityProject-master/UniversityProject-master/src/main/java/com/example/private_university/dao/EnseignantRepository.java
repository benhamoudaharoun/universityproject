package com.example.private_university.dao;

import com.example.private_university.Entity.Enseignant;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EnseignantRepository extends JpaRepository<Enseignant,Long> {
}
