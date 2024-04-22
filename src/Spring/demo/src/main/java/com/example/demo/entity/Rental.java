package com.example.demo.entity;

import java.util.Date;

public class Rental {
    private String itemId;
    private String rentalItem;
    private String username;
    private Date startDate;
    private Date endDate;

    public Rental(String itemId, String rentalItem, String username, Date startDate, Date endDate) {
        this.itemId = itemId;
        this.rentalItem = rentalItem;
        this.username = username;
        this.startDate = startDate;
        this.endDate = endDate;
    }

    public String getItemId() {
        return itemId;
    }

    public void setItemId(String itemId) {
        this.itemId = itemId;
    }

    public String getRentalItem() {
        return rentalItem;
    }

    public void setRentalItem(String rentalItem) {
        this.rentalItem = rentalItem;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }
}
