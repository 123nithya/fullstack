package com.chessacademy.nithya.controller;

// package com.chessacademy.ravikrishna.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.chessacademy.nithya.dto.response.RegisterResponse;
import com.chessacademy.nithya.model.User;
import com.chessacademy.nithya.service.AdminService;

import io.swagger.v3.oas.annotations.Hidden;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/admin")
@PreAuthorize("hasRole('ADMIN')")
@Tag(name = "Admin")
public class AdminController {

    public final AdminService adminService;

    @GetMapping("/getAllUsers")
    @PreAuthorize("hasAuthority('admin:read')")
    public List<User> getUsers() {
        return adminService.getAllUsers();
    }

    @GetMapping("/getUser/{userId}")
    public ResponseEntity<User> getUserById(@PathVariable("userId") String userId) {
        User user = adminService.getUserById(userId);
        if (user != null) {
            return new ResponseEntity<>(user, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    @PreAuthorize("hasAuthority('admin:create')")
    @Hidden
    public String post() {
        return "POST:: admin controller";
    }

    @PutMapping
    @PreAuthorize("hasAuthority('admin:update')")
    @Hidden
    public String put() {
        return "PUT:: admin controller";
    }

    // @DeleteMapping

    @DeleteMapping("/deleteUser/{userId}")
    @PreAuthorize("hasAuthority('admin:delete')")
    public ResponseEntity<?> deleteUserById(@PathVariable("userId") String userId) {
        
        RegisterResponse response = new RegisterResponse();

        if (adminService.deleteUserById(userId)) {
            response.builder().message("Deleted success");
            return new ResponseEntity<>(response,HttpStatus.ACCEPTED);
        } else {
            response.builder().message("No deletion is performed");
            return new ResponseEntity<>(response,HttpStatus.NOT_FOUND);
        }
    }
}
