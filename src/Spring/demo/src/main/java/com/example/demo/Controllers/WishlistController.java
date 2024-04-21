package com.example.demo.Controllers;

import java.util.List;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.WishlistItem;
import com.example.demo.services.WishlistService;

@RestController
@RequestMapping("/api/wishlist")
public class WishlistController {
    private static final Logger logger = LogManager.getLogger(WishlistController.class);

    @Autowired
    private WishlistService wishlistService;

    @GetMapping("/{username}")
    public List<WishlistItem> getWishlist(@PathVariable String username) {
        return wishlistService.getWishlistForUser(username);
    }
    @PostMapping("/{username}/{itemId}")
    public void addToWishlist(@PathVariable String username, @PathVariable String itemId) {
        logger.info(username, itemId);
        wishlistService.addToWishlist(username, itemId);
    }

    @DeleteMapping("/{username}/{wishlistItemId}")
    public void removeFromWishlist(@PathVariable String username, @PathVariable String wishlistItemId) {
        wishlistService.removeFromWishlist(username, wishlistItemId);
    }
}