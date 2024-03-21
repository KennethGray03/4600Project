package com.example.demo.services;

import org.springframework.stereotype.Service;

@Service
public class UserService {

    public boolean authenticate(String username, String password) {
        // Simulate authentication logic
        return "admin".equals(username) && "password".equals(password);
    }
}