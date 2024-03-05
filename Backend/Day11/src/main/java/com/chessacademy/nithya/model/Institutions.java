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
// @Table(name = "institution")
// public class Institutions {
//   @Id
//   @GeneratedValue(strategy = GenerationType.UUID)
//   private String institution_id;

//   @Column(nullable = false)
//   private String institution_name;

//   @Column(nullable = false)
//   private String institution_desc;

//   @Column(nullable = false)
//   private String institution_img;
  
//   @Column(nullable = false)
//   private int institution_rate;

//   @OneToMany(mappedBy = "institution", cascade = CascadeType.ALL,orphanRemoval = true)
//   private List<CourseInstitution> courses;
// }
package com.chessacademy.nithya.model;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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
@Table(name = "institution")
public class Institutions {
  @Id
  @GeneratedValue(strategy = GenerationType.UUID)
  private String institution_id;

  @Column(nullable = false)
  private String institutionName;

  @Column(nullable = false)
  private String institutionDesc;

  @Column(nullable = false)
  private String institutionImg;
  @Column(nullable = false)
  private int institutionRate;

  @OneToMany(mappedBy = "institution")
  private List<Courses> courses;


  
}