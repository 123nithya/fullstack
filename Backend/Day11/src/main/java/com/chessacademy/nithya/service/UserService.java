package com.chessacademy.nithya.service;

import java.security.Principal;
import com.chessacademy.nithya.dto.request.PasswordRequest;

public interface UserService {

    void forgotPassword(PasswordRequest request, Principal principal);
}
