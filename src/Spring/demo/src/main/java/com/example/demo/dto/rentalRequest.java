package com.example.demo.dto;

import java.util.List;

public class rentalRequest {
    private String username;
    private List<String> itemIds;
    private String rentalItem;

    // Constructor without return type declaration
    public rentalRequest(String username, List<String> itemIds, String rentalItem) {
        this.username = username;
        this.itemIds = itemIds;
        this.rentalItem = rentalItem;
    }


    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public List<String> getItemIds() {
        return itemIds;
    }

    public void setItemIds(List<String> itemIds) {
        this.itemIds = itemIds;
    }

    public String getRentalItem() {
        return rentalItem;
    }

    public void setRentalItem(String rentalItem) {
        this.rentalItem = rentalItem;
    }
}
