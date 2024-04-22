package com.example.demo.services;

import java.util.ArrayList;
import java.util.List;
import com.example.demo.entity.trip;
import org.springframework.stereotype.Service;

@Service
public class tripservice {
    private List<trip> trips = new ArrayList<>();

    public tripservice() {
        // Initialize trips
        trips.add(new trip("1", "Climbing at the Bluffs", "Outdoor climbing at the Bluffs!", 0));
        trips.add(new trip("2", "Indian GravePoint Caving", "Caving adventure at Indian GravePoint Cave!", 25));
        trips.add(new trip("3", "Foster Falls Rock Climbing", "Rock climbing adventure at Foster Falls!", 65));
    }

    public List<trip> getAllTrips() {
        return trips;
    }

    // Implement methods to sign up for a trip, cancel trip signup, etc.
}