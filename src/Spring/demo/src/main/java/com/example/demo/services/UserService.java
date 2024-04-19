package com.example.demo.services;

import java.util.HashMap;
import java.util.Map;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;



import org.springframework.stereotype.Service;

import com.example.demo.entity.User;
@Service
public class UserService {
 
    private Map<String, User> users = new HashMap<>();

    private static final Logger logger = LogManager.getLogger(UserService.class);

    public UserService() {
   
        users.put("a", new User("a", "a", "Admin", "User")); // Admin user
        users.put("user1", new User("user1", "123456", "John", "Doe"));   // Sample user 1
        users.put("user2", new User("user2", "password", "Jane", "Smith"));
    }

    public boolean authenticate(String username, String password) {
     
        User user = users.get(username);
        return user != null && user.getPassword().equals(password);
    }

    public boolean createUser(String username, String password, String firstName, String lastName) {
      
        if (users.containsKey(username)) {
       
            return false;
        } else {
     
            users.put(username, new User(username, password, firstName, lastName));
            return true;
        }
    }
    public User getUserByUsername(String key) {
        
        return users.get(key);
        
    }
}