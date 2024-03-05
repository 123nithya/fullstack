package com.chessacademy.nithya.service;

import java.io.IOException;

import com.chessacademy.nithya.dto.request.ForgotPasswordRequest;
import com.chessacademy.nithya.dto.request.LoginRequest;
import com.chessacademy.nithya.dto.request.RegisterRequest;
import com.chessacademy.nithya.dto.response.ForgotPasswordResponse;
import com.chessacademy.nithya.dto.response.LoginResponse;
import com.chessacademy.nithya.dto.response.RegisterResponse;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public interface AuthenticationService {
    RegisterResponse register(RegisterRequest request);

    LoginResponse login(LoginRequest request);

    ForgotPasswordResponse forgotPassword(ForgotPasswordRequest request);

    void refreshToken(HttpServletRequest request, HttpServletResponse response) throws IOException;
}
