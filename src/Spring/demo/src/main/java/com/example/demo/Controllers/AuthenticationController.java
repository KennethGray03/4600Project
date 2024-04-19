package com.example.demo.Controllers;

import com.example.demo.LoginRequest;
import com.example.demo.dto.ApiResponse;
import com.example.demo.entity.User;
import com.example.demo.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class AuthenticationController {
    private static final Logger logger = LogManager.getLogger(UserService.class);

    private final UserService userService;

    @Autowired
    public AuthenticationController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/login")
    public ResponseEntity<ApiResponse> login(@RequestBody LoginRequest request) {
        if (userService.authenticate(request.getUsername(), request.getPassword())) {
            return ResponseEntity.ok(new ApiResponse(true, "Login successful"));
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new ApiResponse(false, "Invalid username or password"));
        }
    }

    @PostMapping("/signup")
    public ResponseEntity<ApiResponse> signup(@RequestBody SignupRequest signupRequest) {
        String username = signupRequest.getUsername();
        String password = signupRequest.getPassword();
        String firstName = signupRequest.getFirstName();
        String lastName = signupRequest.getLastName();
        
        // Attempt to create the user
        boolean userCreated = userService.createUser(username, password, firstName, lastName);
        
        // Check if the user was created successfully
        if (userCreated) {
            return ResponseEntity.ok(new ApiResponse(true, "User created successfully"));
        } else {
            // User creation failed due to username already taken
            return ResponseEntity.status(HttpStatus.CONFLICT).body(new ApiResponse(false, "Username is already taken!"));
        }
    }
    @GetMapping("/user/{username}")
    public ResponseEntity<User> getUserByUsername(@PathVariable String username) {
        logger.info("hello");
        logger.info(username);
        User user = userService.getUserByUsername(username);
        logger.info(user);
        if (user != null) {
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}

class SignupRequest {
    private String username;
    private String password;
    private String lastName;
    private String firstName;
    // Getters and setters
    public String getUsername() {
        return username;
    }


    public String getLastName() {
        return lastName;
    }


    public String getFirstName() {
       return firstName;
    }


    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
