package com.example.demo.Controllers;

import java.util.List;
import java.util.logging.LogManager;
import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.CartItem;
import com.example.demo.services.CartService;
import com.example.demo.services.UserService;

@RestController
@RequestMapping("/api/cart")
public class CartController {
    @Autowired
    private CartService cartService;

    @Autowired
    private UserService userService;
    @GetMapping("/{username}")
    public List<CartItem> getCartItems(@PathVariable String username) {
        return cartService.getCartItems(username);
    }

    @PostMapping("/{username}/{itemId}")
    public void addToCart(@PathVariable String username, @PathVariable String itemId) {
        cartService.addToCart(username, itemId);
    }

    @DeleteMapping("/{username}/{cartItemId}")
    public void removeFromCart(@PathVariable String username, @PathVariable String cartItemId) {
        cartService.removeFromCart(username, cartItemId);
    }
    @GetMapping("/total/{username}") // Endpoint path adjusted to match the frontend
    public double getCartTotal(@PathVariable String username) {
        return userService.getCartTotal(username);
    }
}