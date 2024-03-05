package com.chessacademy.nithya.service.impl;

import java.util.List;

import java.util.Optional;
import org.springframework.stereotype.Service;
import com.chessacademy.nithya.model.User;
import com.chessacademy.nithya.repository.UserRepository;
import com.chessacademy.nithya.service.AdminService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@SuppressWarnings("null")

public class AdminServiceImpl implements AdminService {
    public final UserRepository userRepository;

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAllWithoutCourses();

    }

    @Override
    public User getUserById(String userId) {
        User optionalUser = userRepository.findById(userId).get();
        return optionalUser;
    }

    @Override
    public boolean deleteUserById(String userId) {
        Optional<User> optionalUser = userRepository.findById(userId);
        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            userRepository.delete(user);
            return true;
        }
        return false;
    }

}
