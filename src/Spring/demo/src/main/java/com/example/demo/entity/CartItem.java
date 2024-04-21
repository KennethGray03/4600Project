package com.example.demo.entity;



public class CartItem {
    private String cartItemId; // Adding CartItem ID
    private String itemId;
    private String itemName;
    private double price;

    public CartItem(String cartItemId, String itemId, String itemName, double price) {
        this.cartItemId = cartItemId;
        this.itemId = itemId;
        this.itemName = itemName;
        this.price = price;
    }

    // Getters and setters
    public String getCartItemId() {
        return cartItemId;
    }

    public void setCartItemId(String cartItemId) {
        this.cartItemId = cartItemId;
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