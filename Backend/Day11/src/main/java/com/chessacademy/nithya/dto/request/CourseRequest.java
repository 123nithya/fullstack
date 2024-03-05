// package com.chessacademy.nithya.dto.request;

// import lombok.AllArgsConstructor;
// import lombok.Builder;
// import lombok.Data;
// import lombok.NoArgsConstructor;

// @Data
// @Builder
// @NoArgsConstructor
// @AllArgsConstructor
// public class CourseRequest {

//     private String courseName;
//     private String duration;
//     private int numberOfStudents;
//     private String courseDescription;
//     private int rate;
//     private String courseImg;

//     // getters and setters
// }
package com.chessacademy.nithya.dto.request;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CourseRequest {

    private String courseName;
    private String duration;
    private int numberOfStudents;
    private String courseDesc;
    private int rate;

    // getters and setters
}