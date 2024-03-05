// package com.chessacademy.nithya.repository;


// import java.util.Optional;
// import org.springframework.data.jpa.repository.JpaRepository;
// import org.springframework.data.jpa.repository.Query;

// import com.chessacademy.nithya.model.Institutions;

// public interface InstitutionRepository extends JpaRepository<Institutions, String> {
//         @Query("SELECT i FROM Institutions i WHERE i.institution_name = :institutionName")
//         Optional<Institutions> findByInstitutionName(String institutionName);

// }
package com.chessacademy.nithya.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

import com.chessacademy.nithya.model.Institutions;

public interface InstitutionRepository extends JpaRepository<Institutions, String> {
        
        Optional<Institutions> findByInstitutionName(String institutionName);

        
}