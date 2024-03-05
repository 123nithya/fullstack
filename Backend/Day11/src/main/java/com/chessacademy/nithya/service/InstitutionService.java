// package com.chessacademy.nithya.service;

// import com.chessacademy.nithya.dto.request.CourseRequest;
// import com.chessacademy.nithya.dto.request.InstitutionRequest;
// import com.chessacademy.nithya.dto.request.InstitutionUpdateRequest;

// public interface InstitutionService {
//     void createInstitution(InstitutionRequest request);

//         void updateCourse(String id, CourseRequest request);
//         void updateInstitution(String id, InstitutionUpdateRequest request);


//     void deleteByCourse(String id);
//      void deleteByInstitution(String id) ;
// }

package com.chessacademy.nithya.service;

import com.chessacademy.nithya.dto.request.CourseRequest;
import com.chessacademy.nithya.dto.request.InstitutionRequest;
import com.chessacademy.nithya.dto.response.RegisterResponse;

public interface InstitutionService {

    RegisterResponse createInstitution(InstitutionRequest request);

    RegisterResponse createCourse(CourseRequest request, String institutionName);
    
}