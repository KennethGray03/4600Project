package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.UUID;

import com.example.demo.entity.CartItem;
import com.example.demo.entity.Item;
import com.example.demo.entity.User;

@Service
public class CartService {

    @Autowired
    private UserService userService;

    @Autowired
    private ItemService itemService; // Add ItemService dependency

    public List<CartItem> getCartItems(String username) {
        User user = userService.getUserByUsername(username);
        if (user != null) {
            return user.getCart();
        } else {
            return null; // Handle case when user is not found
        }
    }

    public void addToCart(String username, String itemId) {
        User user = userService.getUserByUsername(username);
        if (user != null) {
            // Fetch item details using itemId
            Item item = itemService.getItemById(itemId);
            if (item != null) {
                // Create a new CartItem with a unique ID and add it to the user's cart
                String cartItemId = generateUniqueID();
                CartItem cartItem = new CartItem(cartItemId, itemId, item.getName(), item.getPrice());
                user.getCart().add(cartItem);
            }
        }
    }

    public void removeFromCart(String username, String cartItemId) {
        User user = userService.getUserByUsername(username);
        if (user != null) {
            // Remove the CartItem with the specified cartItemId from the user's cart
            user.getCart().removeIf(item -> item.getCartItemId().equals(cartItemId));
        }
    }
    public void clearCart(String username) {
        userService.clearCart(username); // Call clearCart method on an instance of UserService
    }

    private String generateUniqueID() {
        // Generate a unique ID using UUID
        return UUID.randomUUID().toString();
    }
}