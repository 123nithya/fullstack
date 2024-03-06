// package com.chessacademy.nithya.model;

// import java.util.List;

// import jakarta.persistence.CascadeType;
// import jakarta.persistence.Column;
// import jakarta.persistence.Entity;
// import jakarta.persistence.GeneratedValue;
// import jakarta.persistence.GenerationType;
// import jakarta.persistence.Id;
// import jakarta.persistence.OneToMany;
// import jakarta.persistence.Table;
// import lombok.AllArgsConstructor;
// import lombok.Builder;
// import lombok.Data;
// import lombok.NoArgsConstructor;

// @Data
// @Builder
// @NoArgsConstructor
// @AllArgsConstructor
// @Entity
// @Table(name = "_courses")
// public class Courses {
// @Id
// @GeneratedValue(strategy = GenerationType.UUID)
// private String course_id;

// @Column(nullable = false)
// private String course_name;

// @Column(nullable = false, unique = true)
// private String course_desc;

// @Column(nullable = false)
// private int course_rate;

// @Column(nullable = false)
// private String course_duration;

// @Column(nullable = false)
// private int course_enroll_cnt;

// @OneToMany(mappedBy = "course", cascade = CascadeType.ALL, orphanRemoval =
// true)
// private List<CourseInstitution> institutions;
// }
package com.chessacademy.nithya.model;

import java.security.Timestamp;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "_courses")
public class Courses {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String course_id;

    @Column(nullable = false)
    private String courseName;

    @Column(nullable = false, unique = true)
    private String courseDesc;

    @Column(nullable = false)
    private int courseRate;

    @Column(nullable = false)
    private String courseDuration;

    @Column(nullable = false)
    private int courseEnrollCnt;

   
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "institution_id")
    private Institutions institution;
}