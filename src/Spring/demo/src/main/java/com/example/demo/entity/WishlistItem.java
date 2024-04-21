package com.example.demo.entity;

public class WishlistItem {
    private String wishlistItemId; // Adding WishlistItem ID
    private String itemId;
    private String itemName;
    private double price;

    public WishlistItem(String wishlistItemId, String itemId, String itemName, double price) {
        this.wishlistItemId = wishlistItemId;
        this.itemId = itemId;
        this.itemName = itemName;
        this.price = price;
    }

    // Getters and setters
    public String getWishlistItemId() {
        return wishlistItemId;
    }

    public void setWishlistItemId(String wishlistItemId) {
        this.wishlistItemId = wishlistItemId;
    }

    public String getItemId() {
        return itemId;
    }

    public void setItemId(String itemId) {
        this.itemId = itemId;
    }

    public String getItemName() {
        return itemName;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName;
    }
    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }
}