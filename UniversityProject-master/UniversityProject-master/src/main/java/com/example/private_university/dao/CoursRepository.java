package com.example.private_university.dao;

import com.example.private_university.Entity.Cours;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CoursRepository extends JpaRepository<Cours,Long> {
}
