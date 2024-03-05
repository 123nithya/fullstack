// package com.chessacademy.nithya.repository;

// import java.util.List;
// import java.util.Optional;

// import org.springframework.data.jpa.repository.JpaRepository;
// import org.springframework.data.jpa.repository.Query;

// import com.chessacademy.nithya.model.Courses;
// import com.chessacademy.nithya.model.Institutions;

// public interface CourseRepository extends JpaRepository<Courses, String> {
//     @Query("SELECT c FROM Courses c WHERE c.course_name = :courseName")
//     Optional<Courses> findByCourseName(String courseName);

//     // @Query("SELECT c FROM Courses c JOIN c.courseInstitutions ci WHERE
//     // ci.institution = :institution")
//     // List<Courses> findByInstitution(Institutions institution);
//     // @Query("SELECT c FROM Courses c INNER JOIN c.institutions ci WHERE
//     // ci.institution = :institution")
//     // List<Courses> findByInstitution(Institutions institution);

// }
package com.chessacademy.nithya.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.chessacademy.nithya.model.Courses;

public interface CourseRepository extends JpaRepository<Courses, String> {


}