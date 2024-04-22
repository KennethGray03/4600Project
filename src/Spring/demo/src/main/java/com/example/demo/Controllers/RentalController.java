package com.example.demo.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.dto.rentalRequest;
import com.example.demo.entity.Rental;
import com.example.demo.services.RentalService;

@RestController
@RequestMapping("/api/rentals")
public class RentalController {

    private final RentalService rentalService;

    @Autowired
    public RentalController(RentalService rentalService) {
        this.rentalService = rentalService;
    }

    @PostMapping("/create")
    public ResponseEntity<?> createRentals(@RequestBody rentalRequest request) {
        try {
            rentalService.createRentals(request.getUsername(), request.getItemIds());
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to create rentals.");
        }
    }
    @GetMapping("/{username}")
    public ResponseEntity<List<Rental>> getRentalsByUsername(@PathVariable String username) {
        List<Rental> rentals = rentalService.getRentalsByUsername(username);
        return new ResponseEntity<>(rentals, HttpStatus.OK);
    }

}