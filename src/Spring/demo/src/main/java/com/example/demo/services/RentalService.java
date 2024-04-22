package com.example.demo.services;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.entity.Rental;

@Service
public class RentalService {

    private List<Rental> rentals = new ArrayList<>();

    public void createRentals(String username, List<String> itemIds, String rentalItem) {
        // Get the current date
        Date currentDate = new Date();

        // Calculate the end date (7 days from the current date)
        Date endDate = calculateEndDate(currentDate);

        // Create rental objects for each item ID and add them to the list of rentals
        for (String itemId : itemIds) {
            Rental rental = new Rental(itemId, rentalItem, username, currentDate, endDate);
            rentals.add(rental);
        }
    }

    public List<Rental> getRentalsByUsername(String username) {
        List<Rental> userRentals = new ArrayList<>();
        for (Rental rental : rentals) {
            if (rental.getUsername().equals(username)) {
                userRentals.add(rental);
            }
        }
        return userRentals;
    }

    private Date calculateEndDate(Date startDate) {
        // Create a calendar instance and set it to the start date
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(startDate);

        // Add 7 days to the start date
        calendar.add(Calendar.DAY_OF_MONTH, 7);

        // Return the end date
        return calendar.getTime();
    }
}