package com.chessacademy.nithya.service;

import java.util.List;

import com.chessacademy.nithya.model.User;

public interface AdminService {
    List<User> getAllUsers();
    public User getUserById(String userId);
    boolean deleteUserById(String userId);
}
