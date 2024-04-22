package com.example.demo.services;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.stereotype.Service;

import com.example.demo.entity.User;
import com.example.demo.entity.WishlistItem;

@Service
public class UserService {
 
    private Map<String, User> users = new HashMap<>();

    private static final Logger logger = LogManager.getLogger(UserService.class);

    public UserService() {
        // Initialize users
        users.put("a", new User("a", "a", "Admin", "User")); // Admin user
        users.put("user1", new User("user1", "123456", "John", "Doe"));   // Sample user 1
        users.put("user2", new User("user2", "password", "Jane", "Smith"));
        
       

        
    }
    public void clearCart(String username) {
        User user = users.get(username);
        if (user != null) {
            user.getCart().clear();
        } else {
            logger.error("User not found: " + username);
        }
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
    
    public void addToWishlist(String username, WishlistItem item) {
        User user = users.get(username);
        if (user != null) {
            user.getWishlist().add(item);
        } else {
            logger.error("User not found: " + username);
        }
    }
    
    public void populateWishlistForUser(String username, WishlistItem item) {
        User user = users.get(username);
        if (user != null) {
            // Generate unique ID for the wishlist item
            String uniqueId = generateUniqueID();
            item.setWishlistItemId(uniqueId);
            user.getWishlist().add(item);
        } else {
            logger.error("User not found: " + username);
        }
    }
    
    // Helper method to generate unique ID
    private String generateUniqueID() {
        return UUID.randomUUID().toString();
    }
    public double getCartTotal(String username) {
        User user = users.get(username);
        if (user != null) {
            return user.calculateCartTotal();
        }
        return 0.0; // or throw an exception
    }
}