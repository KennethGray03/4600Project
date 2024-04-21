package com.example.demo.entity;

import java.util.ArrayList;
import java.util.List;

public class User {
    private String username;
    private String password;
    private String firstName;
    private String lastName;
    private List<WishlistItem> wishlist;
    private List<String> rentalGear;
    private List<CartItem> cart;
    private List<String> tripsSignedUpFor;

    public User(String username, String password, String firstName, String lastName) {
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.wishlist = new ArrayList<>();
        this.rentalGear = new ArrayList<>();
        this.cart = new ArrayList<>();
        this.tripsSignedUpFor = new ArrayList<>();
    }

    public String getUsername() {
        return username;
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

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public List<WishlistItem> getWishlist() {
        return wishlist;
    }

    public void setWishlist(List<WishlistItem> wishlist) {
        this.wishlist = wishlist;
    }

    public List<String> getRentalGear() {
        return rentalGear;
    }

    public void setRentalGear(List<String> rentalGear) {
        this.rentalGear = rentalGear;
    }

    public List<CartItem> getCart() {
        return cart;
    }

    public void setCart(List<CartItem> cart) {
        this.cart = cart;
    }

    public List<String> getTripsSignedUpFor() {
        return tripsSignedUpFor;
    }

    public void setTripsSignedUpFor(List<String> tripsSignedUpFor) {
        this.tripsSignedUpFor = tripsSignedUpFor;
    }
    public double calculateCartTotal() {
        double total = 0.0;
        for (CartItem item : cart) {
            total += item.getPrice();
        }
        return total;
    }
}
