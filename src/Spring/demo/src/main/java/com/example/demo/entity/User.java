package com.example.demo.entity;

import java.util.ArrayList;
import java.util.List;

public class User {
    private String username;
    private String password;
    private String firstName;
    private String lastName;
    private List<String> wishlist;
    private List<String> rentalGear;
    private List<String> cart;
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

    public List<String> getWishlist() {
        return wishlist;
    }

    public void setWishlist(List<String> wishlist) {
        this.wishlist = wishlist;
    }

    public List<String> getRentalGear() {
        return rentalGear;
    }

    public void setRentalGear(List<String> rentalGear) {
        this.rentalGear = rentalGear;
    }

    public List<String> getCart() {
        return cart;
    }

    public void setCart(List<String> cart) {
        this.cart = cart;
    }

    public List<String> getTripsSignedUpFor() {
        return tripsSignedUpFor;
    }

    public void setTripsSignedUpFor(List<String> tripsSignedUpFor) {
        this.tripsSignedUpFor = tripsSignedUpFor;
    }
}
