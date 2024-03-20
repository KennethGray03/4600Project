package com.example.demo.services;

import org.springframework.stereotype.Service;

@Service
public class UserService {

    // Simulated user credentials
    private static final String VALID_USERNAME = "admin";
    private static final String VALID_PASSWORD = "password";

    public boolean authenticateUser(String username, String password) {
        // Perform basic authentication check
        return VALID_USERNAME.equals(username) && VALID_PASSWORD.equals(password);
    }
}