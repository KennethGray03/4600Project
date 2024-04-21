package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Item;
import com.example.demo.entity.User;
import com.example.demo.entity.WishlistItem;

import java.util.List;
import java.util.UUID;

@Service
public class WishlistService {

    @Autowired
    private UserService userService;

    @Autowired
    private ItemService itemService;
    
    public List<WishlistItem> getWishlistForUser(String username) {
        User user = userService.getUserByUsername(username);
        if (user != null) {
            return user.getWishlist();
        } else {
            return null; // Handle case when user is not found
        }
    }

    public void addToWishlist(String username, String itemId) {
        User user = userService.getUserByUsername(username);
        if (user != null) {
            Item item = itemService.getItemById(itemId);
            if (item != null) {
                WishlistItem wishlistItem = new WishlistItem(generateUniqueID(), item.getId(), item.getName(), item.getPrice());
                user.getWishlist().add(wishlistItem);
            }
        }
    }

    public void removeFromWishlist(String username, String wishlistItemId) {
        User user = userService.getUserByUsername(username);
        if (user != null) {
            List<WishlistItem> wishlist = user.getWishlist();
            // Iterate over the wishlist to find the item with the specified wishlistItemId
            for (int i = 0; i < wishlist.size(); i++) {
                WishlistItem item = wishlist.get(i);
                if (item.getWishlistItemId().equals(wishlistItemId)) {
                    wishlist.remove(i); // Remove the item if found
                    return;
                }
            }
        }
    }

    private String generateUniqueID() {
        return UUID.randomUUID().toString();
    }
}
