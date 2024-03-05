// // package com.chessacademy.nithya.controller;

// // import org.springframework.web.bind.annotation.RestController;

// // import com.chessacademy.nithya.dto.request.CourseRequest;
// // import com.chessacademy.nithya.dto.request.InstitutionRequest;
// // import com.chessacademy.nithya.dto.request.InstitutionUpdateRequest;
// // import com.chessacademy.nithya.service.AuthenticationService;
// // import com.chessacademy.nithya.service.InstitutionService;

// // import lombok.RequiredArgsConstructor;

// // import org.springframework.web.bind.annotation.RequestMapping;
// // import org.springframework.web.bind.annotation.RequestMethod;
// // import org.springframework.web.bind.annotation.RequestParam;
// // import org.springframework.security.access.prepost.PreAuthorize;
// // import org.springframework.web.bind.annotation.DeleteMapping;
// // import org.springframework.web.bind.annotation.PostMapping;
// // import org.springframework.web.bind.annotation.PutMapping;
// // import org.springframework.web.bind.annotation.RequestBody;
// // import org.springframework.web.bind.annotation.GetMapping;
// // import org.springframework.web.bind.annotation.PathVariable;

// // @RestController
// // @RequestMapping("/institutions")
// // @PreAuthorize("hasRole('ADMIN')")
// // @RequiredArgsConstructor
// // public class InstitutionController {
// //     private final InstitutionService institutionService;

// //     @PostMapping("/new")
// //     @PreAuthorize("hasAuthority('admin:create')")

// //     public void postMethodName(@RequestBody InstitutionRequest request) {
// //         institutionService.createInstitution(request);

// //         return;
// //     }

// //     @PutMapping("/update/course/{id}")
// //     @PreAuthorize("hasAuthority('admin:update')")
// //     public void updateCourse(@PathVariable String id, @RequestBody CourseRequest request) {
// //         institutionService.updateCourse(id, request);
// //         return;
// //     }

// //     @PutMapping("/update/institution/{id}")
// //     @PreAuthorize("hasAuthority('admin:update')")
// //     public void updateInstitution(@PathVariable String id, @RequestBody InstitutionUpdateRequest request) {
// //         institutionService.updateInstitution(id, request);
// //     }

// //     @DeleteMapping("/delete/course/{id}")
// //     @PreAuthorize("hasAuthority('admin:delete')")
// //     public void deleteCourse(@PathVariable String id) {
// //         institutionService.deleteByCourse(id);
// //         return ;
// //     }

// //     @DeleteMapping("/delete/institution/{id}")
// //     @PreAuthorize("hasAuthority('admin:delete')")
// //     public String deleteInstitution(@PathVariable String id) {
// //         institutionService.deleteByInstitution(id);
// //         return id;
// //     }

// // }

// package com.chessacademy.nithya.controller;

// import com.chessacademy.nithya.model.Institutions;
// import com.chessacademy.nithya.service.InstitutionService;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;
// import org.springframework.security.access.prepost.PreAuthorize;
// import org.springframework.web.bind.annotation.*;

// @RestController
// @PreAuthorize("hasRole('ADMIN')")
// @RequestMapping("/api/institutions")
// public class InstitutionController {

//     private final InstitutionService institutionService;

//     @Autowired
//     public InstitutionController(InstitutionService institutionService) {
//         this.institutionService = institutionService;
//     }

//     @PostMapping
//     @PreAuthorize("hasAuthority('admin:create')")
//     public ResponseEntity<Institutions> addInstitution(@RequestBody Institutions institution) {
//         Institutions savedInstitution = institutionService.addInstitution(institution);
//         return new ResponseEntity<>(savedInstitution, HttpStatus.CREATED);
//     }
// }
package com.chessacademy.nithya.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.chessacademy.nithya.dto.request.CourseRequest;
import com.chessacademy.nithya.dto.request.InstitutionRequest;
import com.chessacademy.nithya.dto.response.RegisterResponse;
import com.chessacademy.nithya.service.InstitutionService;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/api/v1/admin")
@PreAuthorize("hasRole('ADMIN')")
@Tag(name = "INSTITUTION")
@RequiredArgsConstructor
public class InstitutionController {
    public final InstitutionService institutionService;

    @PostMapping("/institution")

    public ResponseEntity<?> addInstitution(@RequestBody InstitutionRequest request) {
        RegisterResponse response = new RegisterResponse();
        try {
            response = institutionService.createInstitution(request);
            return new ResponseEntity<>(response, HttpStatus.ACCEPTED);

        } catch (Exception e) {
            RegisterResponse.builder().message("Exception caught").build();
            return new ResponseEntity<>(response, HttpStatus.EXPECTATION_FAILED);
        }

    }

    @PostMapping("/course/{institutionName}")
    public ResponseEntity<?> postMethodName(@RequestBody CourseRequest request, @PathVariable String institutionName) {
        RegisterResponse response = new RegisterResponse();
        try {
            response = institutionService.createCourse(request, institutionName);
            return new ResponseEntity<>(response, HttpStatus.ACCEPTED);

        } catch (Exception e) {
            e.printStackTrace();
            RegisterResponse.builder().message("Exception caught").build();
            return new ResponseEntity<>(response, HttpStatus.EXPECTATION_FAILED);
        }
    }

}